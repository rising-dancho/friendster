import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import profileRoutes from './routes/profile.routes.js';
import userRoutes from './routes/user.routes.js';
import helmet from 'helmet';
// import cors from 'cors';

// enable .env variable: "process" is a global object available in node applications
dotenv.config();

// create express app
const app = express();
const PORT = process.env.PORT;
const baseURL = '/api/v1/';

// Helmet config
app.use(helmet());

// Use CORS middleware
// app.use(cors());

// middlewares from express
//attaches .body to the req handler
app.use(express.json());

// logger
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use(`${baseURL}profile`, profileRoutes);
app.use(`${baseURL}user`, userRoutes);

// connect to db mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () =>
      console.log(`Connected to db and listening on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
