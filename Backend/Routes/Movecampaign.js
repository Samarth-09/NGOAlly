import cron from 'node-cron';
import volunteerModel from '../Model/Volunteer.js'; 
import ngoModel from '../Model/ngo.js'; 

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

// Function to schedule the task when campaign date is ended
const scheduleCampaignEndTask = (campaignEndDate, campaignId) => {
  // Define the cron expression for the end date
  const cronExpression = getCronExpression(campaignEndDate);

  // Schedule task using cron expression
  cron.schedule(cronExpression, () => {
    moveCampaignToPrevious(campaignId);
  });
};

// Function to get the cron expression for a given date
const getCronExpression = (date) => {
    const d = new Date(date);

    // Set the time to 8:45 PM
    d.setHours(23); 
    d.setMinutes(26); 

    // Construct cron expression
    const cronExpression = `0 ${d.getMinutes()} ${d.getHours()} ${d.getDate()} ${d.getMonth() + 1} *`;
   console.log(cronExpression);
    return cronExpression;
};

export default scheduleCampaignEndTask;
