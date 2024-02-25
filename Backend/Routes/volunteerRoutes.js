import express from "express";
import volunteerModel from "../Model/Volunteer.js";
import {
  getVolunteerById,
  addCampaign,
  updateRequestStatus,
} from "../DbHandler/volunteerHandler.js";
import {
  addVolunteer,
  getCampaignsById,
} from "../DbHandler/campaignHandler.js";
import { canApply, campaignEnded } from "./campaignRoutes.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { id, pwd } = req.body;

    const volunteer = await volunteerModel.findOne({ id, pwd });
    console.log(volunteer);

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
      msg: "Volunteer registered successfully",
    });
  } catch (error) {
    console.error("Error during volunteer registration:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});
router.get("/dashboard", async (req, res) => {
  try {
    // console.log(1);
    const result = await getVolunteerById(req.query.id);
    if (result == 0) {
      res.json({ msg: "Some Error" });
    } else {
      // console.log(2);
      var r = await getCampaignsById(result.currentCampaigns);
      if (r == 0) {
        res.json({ msg: "Some Error" });
      } else {
        var x = [];
        r.forEach((e) => {
          var idx = result.currentCampaigns.indexOf(e.id);
          var d = {
            name: e.name,
            description: e.description,
            status: "Ongoing",
            result: result.requestStatus[idx], //"GRANTED""PENDING" "REJECTED"
          };
          x.push(d);
        });
        var r = await getCampaignsById(result.previousCampaigns);
        if (r == 0) {
          res.json({ msg: "Some Error" });
        } else {
          r.forEach((e) => {
            var idx = result.previousCampaigns.indexOf(e.id);
            var d = {
              name: e.name,
              description: e.description,
              status: "Completed",
              result: result.requestStatus[idx], //"GRANTED""PENDING" "REJECTED"
            };
            x.push(d);
          });
          const y = {
            name: result.name,
            age: result.age,
            gender: result.gender,
            campaignCount: result.campaignCount,
          };
          // var data = {
          //   data1: y,
          //   data2: x,
          // };
          res.json({
            data1: y,
            data2: x,
          });
        }
      }
    }
  } catch (e) {
    res.json({ msg: "Some Error" });
    console.log(e);
  }
});
export default router;
