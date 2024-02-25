import campaignModel from "../Model/campaign.js";
import { addCampaign } from "./ngoHandler.js";
const saveCampaign = async (d) => {
  try {
    const data = new campaignModel(d);
    await data.save();
    const result = await addCampaign(d.host, d.id); // 0 or 1 output
    return result;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

const getCampaignsById = async (ids) => {
  try {
    const result = await campaignModel.find({ id: { $in: ids } });
    if (result.length == 0) {
      return 0;
    }
    return result;
  } catch (e) {
    console.log(e);
    return 0;
  }
};
const addVolunteer = async (id, volunteerId) => {
  try {
    await campaignModel.updateOne(
      { id: id },
      { $push: { volunteers: volunteerId } }
    );
    return 1;
  } catch (e) {
    return 0;
  }
};
export { saveCampaign, getCampaignsById, addVolunteer };
