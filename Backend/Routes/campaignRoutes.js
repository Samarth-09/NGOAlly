import express from "express";
import {
  saveCampaign,
  getCampaignsById,
} from "../DbHandler/campaignHandler.js";
import {
  getVolunteerById,
  getVolunteersById,
} from "../DbHandler/volunteerHandler.js";

let canApply = true;
let campaignEnded = false;

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
    scheduleCampaignEndTask(enDate, req.body.id);
    res.json({ msg: "done" });
  }
});

router.get("/details", async (req, res) => {
  const result = await getCampaignsById(req.query.campaignId);
  if (req.query.volunteerId != null) {
    if (result == 0) {
      res.json({ msg: "some error" });
    } else {
      var vol = await getVolunteerById(req.query.volunteerId);
      if (vol == 0) {
        res.json({ msg: "some error" });
      } else {
        const ngo = await getNgoById(result[0].host);
        if (ngo == 0) {
          res.json({ msg: "some error" });
        } else {
          res.json({
            name: result[0].name,
            location: result[0].location,
            ProjectNeeds: result[0].ProjectNeeds,
            host: ngo.name,
            applicationDate: result[0].applicationDate,
            campaignDate: result[0].campaignDate,
            canApply: canApply,
            campaignEnded: campaignEnded,
            status:
              vol.requestStatus[
                vol.currentCampaigns.indexOf(req.query.campaignId)
              ],
          });
        }
      }
    }
  } else {
    if (result == 0) {
      res.json({ msg: "some error" });
    } else {
      const vol = await getVolunteersById(result[0].volunteers);
      if (vol == 0) {
        res.json({ msg: "some error" });
      } else {
        var v = vol.map((e) => {
          return {
            name: e.name,
            status:
              e.requestStatus[e.currentCampaigns.indexOf(req.query.campaignId)],
          };
        });
        res.json({
          name: result[0].name,
          location: result[0].location,
          ProjectNeeds: result[0].ProjectNeeds,
          host: result[0].host,
          applicationDate: result[0].applicationDate,
          campaignDate: result[0].campaignDate,
          volunteers: v,
        });
      }
    }
  }
});

function convertToDate(dateString) {
  const [day, month, year] = dateString.split("/");
  const date = new Date(year, month - 1, day);
  return date;
}

export default router;
export { canApply, campaignEnded };
