import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  id: {
    unique: true,
    required: true,
    type: Number,
  },
  email: String,
  pwd: String,
  description: String,
  eastablished: String,
  campaignCount: Number,
  currentCampaigns: [Number],
  previousCampaigns: [Number],
});

const ngoModel = mongoose.model("ngos", ngoSchema);

export default ngoModel;