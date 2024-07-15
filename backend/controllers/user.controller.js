import User from '../models/user.model.js';
import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';

// GET all users
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).send({ message: 'All users', data: users });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// GET a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such user' });
  }

  // find the user in by id
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).send({ error: 'No such user' });
  }

  res.status(200).send({ message: `User with id: ${id}`, data: user });
};

// DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such user' });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: 'No such user' });
  }

  res.status(200).json(user);
};

// UPDATE a single user
const updateUser = async (req, res) => {
  const { id } = req.params;
  // check if id is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: 'No such user' });
  }

  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  res.status(200).send({
    message: `User with id: ${id} updated successfully!`,
    data: user,
  });
};

// jwt
function createToken(id) {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: '3d' }); // user is only logged in for only 3days
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.send({ error: error.message });
  }
};

// signup user
async function signupUser(req, res) {
  const { email, password, firstName, lastName, birthday, gender, country } =
    req.body;

  try {
    const user = await User.signup(
      email,
      password,
      firstName,
      lastName,
      birthday,
      gender,
      country
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).send({ email, token });
  } catch (error) {
    res.send({ error: error.message });
  }
}

export { loginUser, signupUser, getAllUsers, getUser, deleteUser, updateUser };
