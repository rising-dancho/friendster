import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

function ProfileForm() {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    relationshipStatus: '',
    InterestedIn: '',
    location: '',
    hometown: '',
    college: '',
    profileURL: '',
    firstName: '',
    lastName: '',
    dob: '',
    schools: '',
    occupation: '',
    hobbiesAndInterests: '',
    favBooks: '',
    favMovies: '',
    favMusic: '',
    favTVShows: '',
    zodiacSign: '',
    aboutMe: '',
    whoIWantToMeet: '',
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/api/v1/profile`,
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setFormData({
        gender: '',
        age: '',
        relationshipStatus: '',
        InterestedIn: '',
        location: '',
        hometown: '',
        college: '',
        profileURL: '',
        firstName: '',
        lastName: '',
        dob: '',
        schools: '',
        occupation: '',
        hobbiesAndInterests: '',
        favBooks: '',
        favMovies: '',
        favMusic: '',
        favTVShows: '',
        zodiacSign: '',
        aboutMe: '',
        whoIWantToMeet: '',
      });
      setError(null);
      setEmptyFields([]);
      console.log('Profile updated', json);
    }
  };

  return (
    <div>
      <div className="sub-heading sub-heading--blue">Profile Settings</div>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Basic Details */}
        <label className="input-title" htmlFor="gender">
          Gender:
        </label>
        <input
          id="gender"
          name="gender"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('gender') ? 'error' : ''
          }`}
          value={formData.gender}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="age">
          Age:
        </label>
        <input
          id="age"
          name="age"
          type="number"
          className={`inputs-settings ${
            emptyFields.includes('age') ? 'error' : ''
          }`}
          value={formData.age}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="relationshipStatus">
          Relationship Status:
        </label>
        <input
          id="relationshipStatus"
          name="relationshipStatus"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('relationshipStatus') ? 'error' : ''
          }`}
          value={formData.relationshipStatus}
          onChange={handleChange}
        />
        <label className="input-title" htmlFor="InterestedIn">
          Interested In:
        </label>
        <input
          id="InterestedIn"
          name="InterestedIn"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('InterestedIn') ? 'error' : ''
          }`}
          value={formData.InterestedIn}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="location">
          Location:
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('location') ? 'error' : ''
          }`}
          value={formData.location}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="hometown">
          Hometown:
        </label>
        <input
          id="hometown"
          name="hometown"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('hometown') ? 'error' : ''
          }`}
          value={formData.hometown}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="college">
          College:
        </label>
        <input
          id="college"
          name="college"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('college') ? 'error' : ''
          }`}
          value={formData.college}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="profileURL">
          Profile URL:
        </label>
        <input
          id="profileURL"
          name="profileURL"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('profileURL') ? 'rror' : ''
          }`}
          value={formData.profileURL}
          onChange={handleChange}
        />

        {/* Additional Details */}
        <label className="input-title" htmlFor="firstName">
          First Name:
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('firstName') ? 'error' : ''
          }`}
          value={formData.firstName}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="lastName">
          Last Name:
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('lastName') ? 'error' : ''
          }`}
          value={formData.lastName}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="dob">
          Date of Birth:
        </label>
        <input
          id="dob"
          name="dob"
          type="date"
          className={`inputs-settings ${
            emptyFields.includes('dob') ? 'error' : ''
          }`}
          value={formData.dob}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="schools">
          Schools:
        </label>
        <input
          id="schools"
          name="schools"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('schools') ? 'error' : ''
          }`}
          value={formData.schools}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="occupation">
          Occupation:
        </label>
        <input
          id="occupation"
          name="occupation"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('occupation') ? 'error' : ''
          }`}
          value={formData.occupation}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="hobbiesAndInterests">
          Hobbies and Interests:
        </label>
        <input
          id="hobbiesAndInterests"
          name="hobbiesAndInterests"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('hobbiesAndInterests') ? 'error' : ''
          }`}
          value={formData.hobbiesAndInterests}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="favBooks">
          Favorite Books:
        </label>
        <input
          id="favBooks"
          name="favBooks"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('favBooks') ? 'error' : ''
          }`}
          value={formData.favBooks}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="favMovies">
          Favorite Movies:
        </label>
        <input
          id="favMovies"
          name="favMovies"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('favMovies') ? 'error' : ''
          }`}
          value={formData.favMovies}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="favMusic">
          Favorite Music:
        </label>
        <input
          id="favMusic"
          name="favMusic"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('favMusic') ? 'error' : ''
          }`}
          value={formData.favMusic}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="favTVShows">
          Favorite TV Shows:
        </label>
        <input
          id="favTVShows"
          name="favTVShows"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('favTVShows') ? 'error' : ''
          }`}
          value={formData.favTVShows}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="zodiacSign">
          Zodiac Sign:
        </label>
        <input
          id="zodiacSign"
          name="zodiacSign"
          type="text"
          className={`inputs-settings ${
            emptyFields.includes('zodiacSign') ? 'error' : ''
          }`}
          value={formData.zodiacSign}
          onChange={handleChange}
        />

        <label className="input-title" htmlFor="aboutMe">
          About Me:
        </label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          className={`inputs-settings ${
            emptyFields.includes('aboutMe') ? 'error' : ''
          }`}
          value={formData.aboutMe}
          onChange={handleChange}
        ></textarea>

        <label className="input-title" htmlFor="whoIWantToMeet">
          Who I Want to Meet:
        </label>
        <textarea
          id="whoIWantToMeet"
          name="whoIWantToMeet"
          className={`inputs-settings margin-bottom-sm ${
            emptyFields.includes('whoIWantToMeet') ? 'error' : ''
          }`}
          value={formData.whoIWantToMeet}
          onChange={handleChange}
        ></textarea>

        <button className="blueBigButton btn-normal" type="submit">
          Save Changes
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default ProfileForm;
