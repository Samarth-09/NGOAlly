import nodemailer from "nodemailer";
import volunteerModel from "../Model/Volunteer.js";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "djgharia@gmail.com", 
      pass: "lwpc tavt zmjo eswi", 
    },
  });

  const matchCampaignWithVolunteers = async (campaign) => {
  
    const volunteers = await volunteerModel.find();
  
 
    volunteers.forEach(async (volunteer) => {
 
      const matchedFilter = volunteer.filters.find(filter => campaign.ProjectNeeds.includes(filter));

      if (matchedFilter) {
        try {
          await transporter.sendMail({
            from: "djgharia@gmail.com", 
            to: `${volunteer.email}`, 
            subject: "New Campaign Matching Your Interests",
            text: `Dear ${volunteer.name},\n\nA new campaign matching your interests has been created: ${campaign.name}. Would you like to join?`,
          });
          console.log(`Email sent to ${volunteer.name}`);
        } catch (error) {
          console.error(`Error sending email to ${volunteer.name}:`, error);
        }
      }
    });
  };
  export default matchCampaignWithVolunteers;
  