import express from "express";
import { saveCampaign } from "../DbHandler/campaignHandler.js";
import scheduleCampaignEndTask from "./Movecampaign.js";
const router = express.Router();
router.post("/create", async (req, res) => {
  const x = await saveCampaign(req.body);
  if (x == 0) {
    res.json({ msg: "Some error" });
  } else {
    console.log(req.body.campaignDate);
    console.log(req.body.id);

    var dates1 = req.body.campaignDate.split("-");
    
    var stDate = convertToDate(dates1[0]),
    enDate = convertToDate(dates1[1]);

    scheduleCampaignEndTask(enDate,req.body.id);
    res.json({msg: "done"});


  }
});

function convertToDate(dateString) {
  const [day, month, year] = dateString.split("/");
  const date = new Date(year, month - 1, day);
  return date;
}

export default router;