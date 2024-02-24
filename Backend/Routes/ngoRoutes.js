import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, location, id, pwd, established, description } =
      req.body;

    const newNGO = new ngoModel({
      name: name,
      email: email,
      location: location,
      id: parseInt(id),
      pwd: pwd,
      established: established,
      description: description,
      campaignCount: 0,
      currentCampaigns: [],
      previousCampaigns: [],
    });

    const result = await saveNgo(newNGO);
    if (result) {
      res.status(201).json({
        msg: "NGO registered successfully",
      });
    } else {
      res.status(500).json({ msg: "Internal server error" });
    }
  } catch (error) {
    console.error("Error during NGO registration:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { id, pwd } = req.body;

    const user = await getNgoById(id);

    if (user != 0 || user.pwd !== pwd) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      msg: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
});
export default router;
