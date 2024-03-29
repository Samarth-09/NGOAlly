import express from "express";
import { getNgoById } from "../DbHandler/ngoHandler.js";
import {
  saveCampaign,
  getCampaignsById,
} from "../DbHandler/campaignHandler.js";
import {
  getVolunteerById,
  getVolunteersById,
  updateRequestStatus,
} from "../DbHandler/volunteerHandler.js";
import matchCampaignWithVolunteers from "./sendEmailtoVolunteer.js";
import {
  scheduleCampaignEndTask,
  scheduleApplicationEnddate,
} from "./Movecampaign.js";
import { canApply, campaignEnded } from "./Movecampaign.js";

const router = express.Router();
router.post("/create", async (req, res) => {
  const x = await saveCampaign(req.body);
  if (x == 0) {
    res.json({ msg: "Some error" });
  } else {
    console.log(req.body.campaignDate);
    console.log(req.body.id);

    matchCampaignWithVolunteers(req.body);
    // var dates1 = req.body.campaignDate.split("-");

    // var stDate = convertToDate(dates1[0]),
    //   enDate = convertToDate(dates1[1]);
    // scheduleCampaignEndTask(enDate, req.body.id);

    // var applicationdate = req.body.applicationDate.split("-");
    // var stapplicationDate = convertToDate(applicationdate[0]),
    //   endapplicationDate = convertToDate(applicationdate[1]);

    // scheduleApplicationEnddate(endapplicationDate);

    res.json({ msg: "done" });
  }
});

router.get("/details", async (req, res) => {
  // console.log(1);
  const result = await getCampaignsById(parseInt(req.query.campaignId));
  if (req.query.volunteerId != null) {
    if (result == 0) {
      res.json({ msg: "some error1" });
    } else {
      var vol = await getVolunteerById(parseInt(req.query.volunteerId));
      if (vol == 0) {
        res.json({ msg: "some error2" });
      } else {
        const ngo = await getNgoById(result[0].host);
        if (ngo == 0) {
          res.json({ msg: "some error3" });
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
              vol.currentCampaigns.indexOf(parseInt(req.query.campaignId)) != -1
                ? vol.requestStatus[
                    vol.currentCampaigns.indexOf(parseInt(req.query.campaignId))
                  ]
                : "not applied",
          });
        }
      }
    }
  } else {
    // console.log(2);
    if (result == 0) {
      res.json({ msg: "some error4" });
    } else {
      const vol = await getVolunteersById(result[0].volunteers);
      if (vol == 0) {
        res.json({ msg: "some error5" });
      } else {
        var v = [];
        vol.forEach((e) => {
          var x = {
            name: e.name,
            id: e.id,
            status:
              e.requestStatus[e.currentCampaigns.indexOf(req.query.campaignId)],
          };
          v.push(x);
        });
        // console.log(v);
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

router.post("/grant", async (req, res) => {
  const result = await updateRequestStatus(
    req.query.volunteerId,
    req.query.campaignId,
    "granted"
  );
  if (result == 0) {
    res.json({ msg: "some error" });
  } else {
    res.json({ msg: "done" });
  }
});

router.post("/reject", async (req, res) => {
  const result = await updateRequestStatus(
    req.query.volunteerId,
    req.query.campaignId,
    "rejected"
  );
  if (result == 0) {
    res.json({ msg: "some error" });
  } else {
    res.json({ msg: "done" });
  }
});
function convertToDate(dateString) {
  const [day, month, year] = dateString.split("/");
  const date = new Date(year, month - 1, day);
  return date;
}

export default router;
export { canApply, campaignEnded };
