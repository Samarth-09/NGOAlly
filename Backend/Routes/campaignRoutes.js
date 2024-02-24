import express from "express";
import { saveCampaign } from "../DbHandler/campaignHandler.js";

const router = express.Router();
router.post("/create", async (req, res) => {
  const x = await saveCampaign(req.body);
  if (x == 0) {
    res.json({ msg: "Some error" });
  } else {
    res.json({msg: "done"});
  }
});

export default router;