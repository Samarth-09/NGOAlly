const saveNgo = async (ngo) => {
  try {
    await ngo.save();
    return 1;
  } catch (e) {
    console.log(e);
    return 0;
  }
};
