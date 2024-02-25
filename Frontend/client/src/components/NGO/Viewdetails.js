import React, { useState, useEffect } from "react";
import NgoNav from "./NgoNav";
import axios from "axios";
import Footer from "../Footer";

const Viewdetails = () => {
  const campaign_id = localStorage.getItem("ngo-campaign-id");
  const [campaign, setCampaign] = useState({});
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [needs, setNeeds] = useState("");
  const [host, setHost] = useState("");
  const [appdate, setAppdate] = useState("");
  const [campdate, setCampdate] = useState("");
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // console.log(1);
    const fetchData = async () => {
      // console.log(2);
      try {
        // console.log(3);
        //campaign_id = (campaign_id === null || campaign_id === 0 )? 2 : campaign_id;
        const response = await axios.get(
          `http://localhost:3003/campaign/details?campaignId=2`
        );
        // console.log(4);
        const data1 = response.data.name;
        const data2 = response.data.location;
        const data3 = response.data.ProjectNeeds;
        const data4 = response.data.host;
        const data5 = response.data.applicationDate;
        const data6 = response.data.campaignDate;
        const data7 = response.data.volunteers;
        setName(data1);
        setLocation(data2);
        setNeeds(data3);
        setHost(data4);
        setAppdate(data5);
        setCampdate(data6);
        setVolunteers(data7);
        console.log(data7[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [campaign_id]);

  return (
    <>
      <NgoNav></NgoNav>
      <div className="container" style={{ marginLeft: "30%" }}>
        <div className="row text-center">
          <div
            className="col-5 text-dark bg-ngo-container font-family-label"
            style={{ borderRadius: "10px", padding: "2%0", fontSize: "24px" }}
          >
            <p>
              <b>Campaign Name : </b>
              {name}
            </p>
            <p>
              <b>Campaign Location : </b>
              {location}
            </p>
            <p>
              <b>Campaign Needs : </b>
              {needs}
            </p>
            <p>
              <b>Campaign Host : </b>
              {host}
            </p>
            <p>
              <b>Application Date : </b>
              {appdate}
            </p>
            <p>
              <b>Campaign Date : </b>
              {campdate}
            </p>
            <u>
              <p style={{ marginBottom: "1%" }}>Volunteers list : </p>
            </u>
            <div className="row">
              <div className="col-12">
                {volunteers.map((obj, key) => (
                  <div id={key}>
                    <p style={{ marginBottom: "-1%" }}>
                      <b>{key + 1}) Volunteer Name : </b>
                      {obj.name}
                    </p>
                    <p>
                      <b>Volunteer List : </b>
                      {obj.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Viewdetails;
