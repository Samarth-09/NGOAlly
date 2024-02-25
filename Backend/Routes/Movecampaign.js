import cron from 'node-cron';
import volunteerModel from '../Model/Volunteer.js';
import ngoModel from '../Model/ngo.js';
let canApply = true;
let campaignEnded = false;
function changeApply(val){
  canApply = val;
}
function changeCampaignEnded(val){
  campaignEnded = val;
}
const moveCampaignToPrevious = async (campaignId) => {
  console.log("hello");
  try {
    // Update volunteers
    await volunteerModel.updateMany(
      { currentCampaigns: campaignId },
      { $pull: { currentCampaigns: campaignId }, $addToSet: { previousCampaigns: campaignId } }
    );

    // Update NGO
    await ngoModel.updateMany(
      { currentCampaigns: campaignId },
      { $pull: { currentCampaigns: campaignId }, $addToSet: { previousCampaigns: campaignId } }
    );

    console.log(`Campaign with ID ${campaignId} moved to previous for volunteers and NGO`);
  } catch (error) {
    console.error('Error moving campaign to previous:', error);
  }
};

const scheduleCampaignEndTask = (campaignEndDate, campaignId) => {
  const cronExpression = getCronExpression(campaignEndDate);

  cron.schedule(cronExpression, () => {
    moveCampaignToPrevious(campaignId);
  });
};

// Function to get the cron expression for a given date
const getCronExpression = (date) => {
  const d = new Date(date);


  d.setHours(23);
  d.setMinutes(26);


  const cronExpression = `0 ${d.getMinutes()} ${d.getHours()} ${d.getDate()} ${d.getMonth() + 1} *`;
  console.log(cronExpression);
  return cronExpression;
};

const scheduleApplicationEnddate = (applicationEndDate) => {
  const cronExpression = getCronExpression(applicationEndDate);

  cron.schedule(cronExpression, () => {
    disableApplybtn();
  });
};

const disableApplybtn = async () => {

  try {

canApply=false;
    console.log("btn disabled");
  } catch (error) {
    console.error('Error ', error);
  }
};




export {scheduleApplicationEnddate,scheduleCampaignEndTask};
export { changeApply, changeCampaignEnded, canApply, campaignEnded };