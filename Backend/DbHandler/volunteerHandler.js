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
export { getVolunteerById, getVolunteersById };
