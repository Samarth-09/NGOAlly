import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
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
      ProjectNeeds: [String],
      description: String,
      host: {
        required: true,
        type: Number
      },
      applicationDate: {
        required: true,
        type: String
      },
      campaignDate: {
        required: true,
        type: String
      },
      volunteers: [Number]
});

const campaignModel = mongoose.model("campaigns", campaignSchema);

export default campaignModel;