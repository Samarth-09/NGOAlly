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

export { saveCampaign };
