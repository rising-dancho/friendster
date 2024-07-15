import Profile from '../models/profile.model.js';
import { Types } from 'mongoose';

// GET all profiles
const getAllProfile = async (req, res) => {
  const profiles = await Profile.find({});
  try {
    res.status(200).send({ message: 'All profiles', data: profiles });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// GET a single profile
const getProfile = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such profile' });
  }

  // find the profile in by id
  const profile = await Profile.findById(id);
  if (!profile) {
    return res.status(404).send({ error: 'No such profile' });
  }

  res.status(200).send({ message: `Profile with id: ${id}`, data: profile });
};

// POST a single profile
const postProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      ...req.body,
    });
    // response code and sending the json file
    res.status(200).send(profile);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// DELETE a profile
const deleteProfile = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such profile' });
  }

  const profile = await Profile.findOneAndDelete({ _id: id });

  if (!profile) {
    return res.status(400).json({ error: 'No such profile' });
  }

  res.status(200).json(profile);
};

// UPDATE a single profile
const updateProfile = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such profile' });
  }

  const profile = await Profile.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  res.status(200).send({
    message: `Profile with id: ${id} updated successfully!`,
    data: profile,
  });
};

export { getAllProfile, getProfile, postProfile, deleteProfile, updateProfile };
