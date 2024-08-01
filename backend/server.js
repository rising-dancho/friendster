import express from 'express';
import dotenv from 'dotenv';

// enable .env variable: "process" is a global object available in node applications
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT || 5000;
const baseURL = '/api/v1/';

app.get('/', (req, res) =>
  res.send({ msg: 'Welcome to Friendster clone API' })
);

app.listen(PORT, () =>
  console.log(`Connected to db and listening on port ${PORT}`)
);
