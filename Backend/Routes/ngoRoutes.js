import express from "express";
import ngoModel from "../Model/ngo.js";
import { getNgoById } from "../DbHandler/ngoHandler.js";
import { getCapaignsById } from "../DbHandler/campaignHandler.js";
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  try {
    const result = await getNgoById(req.query.id);
    if (result == 0) {
      res.json({ msg: "Some Error" });
    } else {
      var r = await getCapaignsById(result.currentCampaigns);
      if (r == 0) {
        res.json({ msg: "Some Error" });
      } else {
        var x = [];
        r.forEach((e) => {
          var d = {
            name: e.name,
            description: e.description,
            status: "Ongoing",
          };
          x.push(d);
        });
        var r = await getCapaignsById(result.previousCampaigns);
        if (r == 0) {
          res.json({ msg: "Some Error" });
        } else {
          r.forEach((e) => {
            var d = {
              name: e.name,
              description: e.description,
              status: "Completed",
            };
            x.push(d);
          });
          const y = {
            name: result.name,
            description: result.description,
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




router.post("/register", async (req, res) => {
  try {
    const { name, email, location, id, pwd, established, description } =
      req.body;

    const newNGO = new ngoModel({
      name: name,
      email: email,
      location: location,
      id: parseInt(id),
      pwd: pwd,
      established: established,
      description: description,
      campaignCount: 0,
      currentCampaigns: [],
      previousCampaigns: [],
    });

    const result = await saveNgo(newNGO);
    if (result) {
      res.status(201).json({
        msg: "NGO registered successfully",
      });
    } else {
      res.status(500).json({ msg: "Internal server error" });
    }
  } catch (error) {
    console.error("Error during NGO registration:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { id, pwd } = req.body;

    const user = await getNgoById(id);
    console.log(typeof(pwd));
    if (user == 0 || user.pwd != pwd) {
      return res.status(401).json({
        msg: "Invalid credentials",
      });
    }

    return res.status(200).json({
      msg: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});
export default router;
