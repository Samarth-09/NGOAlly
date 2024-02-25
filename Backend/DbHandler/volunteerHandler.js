import volunteerModel from "../Model/Volunteer.js";

const getVolunteerById = async (id) => {
  try {
    const result = await volunteerModel.find({ id: id });
    if (result.lenght == 0) {
      return 0;
    } else {
      return result[0];
    }
  } catch (e) {
    console.log(e);
    return 0;
  }
};

const getVolunteersById = async (ids) => {
  try {
    const result = await volunteerModel.find({ id: { $in: ids } });
    if (result.lenght == 0) {
      return 0;
    } else {
      return result;
    }
  } catch (e) {
    console.log(e);
    return 0;
  }
};

const addCampaign = async (id, campaignId) => {
  try {
    await volunteerModel.updateOne(
      { id: id },
      { $push: { currentCampaigns: campaignId, requestStatus: "pending" } }
    );
    return 1;
  } catch (e) {
    return 0;
  }
};

const updateRequestStatus = async (id, campaignId,status) => {
  let x = await getVolunteerById(id);
  let idx;
  if (x == 0) {
    return 0;
  } else {
    idx = x.currentCampaigns.indexOf(campaignId);
    await volunteerModel.updateOne(
      { id: id },
      { $set: { [`requestStatus.${idx}`]: status } }
    );
    return 1;
  }
};
export {
  getVolunteerById,
  getVolunteersById,
  addCampaign,
  updateRequestStatus,
};
