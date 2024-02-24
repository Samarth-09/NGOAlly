import mongoose from "mongoose";
import ngoModel from "../Model/ngo.js";

const saveNgo = async (ngo) => {
  try {
    await ngo.save();
    return 1;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

const getNgoById = async (id) => {
  try {
    const result = await ngoModel.find({ id: id });
    if (result.length == 0) {
      return 0;
    }
    return result[0];
  } catch (e) {
    console.log(e);
    return 0;
  }
};

const addCampaign = async (ngoId, newcampaignId) => {
  try {
    const result = await ngoModel.updateOne(
      { id: ngoId },
      { $push: { currentCampaigns: newcampaignId } }
    );
    return 1;
  } catch (e) {
    return 0;
  }
};

const removeCampaign = async (ngoId, campaignId) => {
  try {
    const result = await ngoModel.updateOne(
      { id: ngoId },
      { $pull: { currentCampaigns: campaignId } }
    );
    return 1;
  } catch (e) {
    return 0;
  }
};
export { getNgoById, saveNgo, addCampaign };
