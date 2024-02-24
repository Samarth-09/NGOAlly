import express from "express";
import { getVolunteerById } from "../DbHandler/volunteerHandler.js";
import {getCapaignsById,getCampaignsByFilters,} from "../DbHandler/campaignHandler.js";

import volunteerModel from "../Model/Volunteer.js";

const router = express.Router();




router.post("/login", async (req, res) => {
    try {
      const { name, pwd } = req.body;
  
      const volunteer = await volunteerModel.findOne({ name, pwd });
  
      if (volunteer) {
        return res.status(200).json({
          message: "Volunteer logged in successfully",
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error during volunteer login:", error);
  
      res.status(500).json({ message: "Internal server error" });
    }
  });
  



  router.post("/register", async (req, res) => {
    try {
      const { name, age, gender, pwd, email, id, filters } = req.body;
  
      const newVolunteer = new volunteerModel({
        name,
        age,
        gender,
        pwd,
        email,
        id,
        filters,
        campaignCount: 0,
        requestStatus: [],
        currentCampaigns: [],
        previousCampaigns: [],
      });
  
      await newVolunteer.save();
  
      res.status(201).json({
        message: "Volunteer registered successfully",
      });
    } catch (error) {
      console.error("Error during volunteer registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
export default router;