import React, {useState, useEffect} from "react";
import NgoNav from "./NgoNav";
import axios from "axios";
import Footer from "../Footer";

const Viewdetails = () => {
  let campaign_id = localStorage.getItem("ngo-campaign-id");
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/campaign/details?campaignId=${campaign_id}`
        );

        const data1 = response.data;
        setCampaign(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="text-light">
      <NgoNav />
      <h1 style={{marginTop:'5%'}}>Campaign Details: </h1>
      <p>{campaign.name}</p>

    </div>
    <Footer/>
    </>
  );
};

export default Viewdetails;
