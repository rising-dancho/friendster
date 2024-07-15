import { Schema, model } from 'mongoose';

// Schema: enforces the schema on the objects entering the database
const profileSchema = new Schema(
  {
    gender: String,
    age: Number,
    relationshipStatus: String,
    InterestedIn: String,
    location: String,
    hometown: String,
    college: String,
    profileURL: String,
    firstName: String,
    lastName: String,
    dob: Date,
    schools: String,
    occupation: String,
    hobbiesAndInterests: String,
    favBooks: String,
    favMovies: String,
    favMusic: String,
    favTVShows: String,
    zodiacSign: String,
    aboutMe: String,
    whoIWantToMeet: String,
  },
  {
    timestamps: true,
  }
);

// model
const Profile = model('Profile', profileSchema);

export default Profile;
