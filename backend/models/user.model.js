import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

// Schema: enforces the schema on the objects entering the database
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    birthday: {
      type: Date,
      required: [true, 'Birthday is required'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
  {
    timestamps: true,
  }
);

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  firstName,
  lastName,
  birthday,
  gender,
  country
) {
  // validation
  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !birthday ||
    !gender ||
    !country
  ) {
    throw Error('All fields must be filled');
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }

  // docs: https://www.npmjs.com/package/validator
  // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
  // Define custom options
  const options = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };
  if (!validator.isStrongPassword(password, options)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('Email already in use');
  }

  // signup user
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    email,
    password: hash,
    firstName,
    lastName,
    birthday,
    gender,
    country,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled');
  }

  const user = await this.findOne({ email });

  console.log('Login method', user);

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  } else {
    return user;
  }
};

// model
const User = model('User', userSchema);

export default User;
