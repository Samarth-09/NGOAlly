import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: String,
  pwd: String,
  email: String,
  // location: String,
  id: {
    unique: true,
    required: true,
    type: Number,
  },
  campaignCount: Number,
  requestStatus: [String],
  filters: [String],
  currentCampaigns: [Number],
  previousCampaigns: [Number],
});

// volunteerSchema.methods = {
//     // apply: function (id) {
//     //     this.requestStatus = "Pending";
//     //     this.currentCampaign.add(id);
//     // },
//     // setRequestStatus: function (status) {
//     //     this.requestStatus = "status";
//     // },
//     // addFilter: function (filter) {
//     //     this.filter.add(filter);
//     // },

// }

const volunteerModel = mongoose.model("Volunteers", volunteerSchema);
export default volunteerModel;