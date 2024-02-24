import express from 'express';
import * as env from 'dotenv';
import mongoose from 'mongoose';
import ngoRouter from './Routes/ngoRoutes.js';
import ngoVolunteer from './Routes/volunteerRoutes.js';
env.config();
const app = express();  //*wifi#21
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    // Set CORS headers to allow cross-origin requests (required to communicate with flutter thorugh localhosting)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS, PUT, GET, DELETE"
    );
    next();
  });
  
  try {
    mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
      console.log("connected");
    });
  } catch (e) {
    console.log(e);
  }

  app.use("/ngo", ngoRouter);
  app.use("/volunteer", ngoVolunteer);
  const port = process.env.PORT || 3003;

  app.listen(port, ()=>{
    console.log(port);
  })