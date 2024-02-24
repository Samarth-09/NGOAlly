import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  id: {
    unique: true,
    require: true,
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