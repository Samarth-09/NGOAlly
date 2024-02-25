import React, { useState, useEffect } from "react";
import axios from "axios";
import ngoimg from "../assets/ngo.jpg";
import {Link} from "react-router-dom";
import Footer from "../Footer";
const NgoDashboard = () => {

  const handleViewDetails = () => {
    console.log(campaign.id);
    // localStorage.setItem("campaign-ngo-id",id);
    // console.log(localStorage.getItem("campaign-ngo-id"));
  }

  const userID = localStorage.getItem('userID');
  const [ngo, setNgo] = useState(null);
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/ngo/dashboard?id=${userID}`
        );

        const data1 = response.data.data1;
        const data2 = response.data.data2;

        setNgo(data1);
        setCampaign(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-light container">
      {ngo ? (
        <>
          <h1
            className="text-primary"
            style={{
              marginTop: "3%",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "2%",
            }}
          >
            {ngo.name}
          </h1>
          <div className="row" style={{ marginBottom: "5%" }}>
            <div
              className="col-md-5"
              style={{ display: "grid", placeContent: "center" }}
            >
              <img
                src={ngoimg}
                alt="NGO"
                style={{ width: "90%", height: "90%" }}
              ></img>
            </div>
            <div
              className="col-md-7 align-self-center text-dark bg-ngo-container"
              style={{
                border: "2px solid",
                borderRadius: "8px",
                padding: "2%",
              }}
            >
              <p>{ngo.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      {campaign ? (
        <>
          <h1 style={{ marginBottom: "3%", marginTop: "3%" }}>
            Ongoing Campaigns :{" "}
          </h1>
          <div className="row gy-3">
            {campaign
              .filter((campaign) => campaign.status === "Ongoing")
              .map((campaign, index) => (
                <div
                  className="col-12 bg-light text-dark"
                  key={index}
                  style={{ borderRadius: "8px" }}
                >
                  <div style={{ marginTop: "1%" }}>
                    <h2>
                      Campaign Name:
                      <span style={{ color: "#50ce9f" }}> {campaign.name}</span>
                    </h2>
                  </div>
                  <div>
                    <p style={{ marginBottom: "0.5%" }}>
                      Campaign Description : {campaign.description}
                    </p>
                  </div>
                  <div>
                    <p>Status: {campaign.status}</p>
                  </div>
                  <div style={{ marginBottom: "1%" }}>
                  <Link to="/view-details">
                    <button type="button" className="btn btn-primary" onClick={()=>{
                      localStorage.setItem("ngo-campaign-id", campaign.id);
                      
                    }}>
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <h1 style={{ marginBottom: "3%", marginTop: "3%" }}>
            Past Campaigns :{" "}
          </h1>
          <div className="row gy-3">
            {campaign
              .filter((campaign) => campaign.status !== "Ongoing")
              .map((campaign, index) => (
                <div
                  className="col-12 bg-light text-dark"
                  key={index}
                  style={{ borderRadius: "8px" }}
                >
                  <div style={{ marginTop: "1%" }}>
                    <h2>
                      Campaign Name:
                      <span style={{ color: "#50ce9f" }}> {campaign.name}</span>
                    </h2>
                  </div>
                  <div>
                    <p style={{ marginBottom: "0.5%" }}>
                      Campaign Description : {campaign.description}
                    </p>
                  </div>
                  <div>
                    <p>Status: {campaign.status}</p>
                  </div>
                  <div style={{ marginBottom: "1%" }}>
                    <button type="button" className="btn btn-primary" onClick={handleViewDetails}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Footer/>
    </div>
  );
};

export default NgoDashboard;

/*
import React from "react";
import ngoimg from "../assets/ngo.jpg";
import NgoNav from "./NgoNav";
const NgoDashboard = () => {

  return (
    <div className="text-light container">
      <h1
        className="text-primary"
        style={{
          marginTop: "3%",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "2%",
        }}
      >
        {ngo.name}
      </h1>
      <div className="row" style={{ marginBottom: "5%" }}>
        <div
          className="col-md-5"
          style={{ display: "grid", placeContent: "center" }}
        >
          <img
            src={ngoimg}
            alt="NGO"
            style={{ width: "90%", height: "90%" }}
          ></img>
        </div>
        <div
          className="col-md-7 align-self-center text-dark bg-ngo-container"
          style={{ border: "2px solid", borderRadius: "8px", padding: "2%" }}
        >
          <p>{ngo.description}</p>
        </div>
      </div>

      

      <h1 style={{ marginBottom: "3%", marginTop: "3%" }}>
        Ongoing Campaigns :{" "}
      </h1>
      <div className="row gy-3">
        {campaigns
          .filter((campaign) => campaign.status === "Ongoing")
          .map((campaign, index) => (
            <div
              className="col-12 bg-light text-dark"
              key={index}
              style={{ borderRadius: "8px" }}
            >
              <div style={{ marginTop: "1%" }}>
                <h2>
                  Campaign Name:
                  <span style={{ color: "#50ce9f" }}> {campaign.name}</span>
                </h2>
              </div>
              <div>
                <p style={{ marginBottom: "0.5%" }}>
                  Campaign Description : {campaign.description}
                </p>
              </div>
              <div>
                <p>Status: {campaign.status}</p>
              </div>
              <div style={{ marginBottom: "1%" }}>
                <button type="button" className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>

     
      <h1 style={{ marginBottom: "3%", marginTop: "3%" }}>Past Campaigns : </h1>
      <div className="row gy-3">
        {campaigns
          .filter((campaign) => campaign.status !== "Ongoing")
          .map((campaign, index) => (
            <div
              className="col-12 bg-light text-dark"
              key={index}
              style={{ borderRadius: "8px" }}
            >
              <div style={{ marginTop: "1%" }}>
                <h2>
                  Campaign Name:
                  <span style={{ color: "#50ce9f" }}> {campaign.name}</span>
                </h2>
              </div>
              <div>
                <p style={{ marginBottom: "0.5%" }}>
                  Campaign Description : {campaign.description}
                </p>
              </div>
              <div>
                <p>Status: {campaign.status}</p>
              </div>
              <div style={{ marginBottom: "1%" }}>
                <button type="button" className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NgoDashboard;
*/

/*
const ngo = {
  name: "PetCare NGO",
  description:
    "VOSD is India’s first, largest, best-designed and best-managed dog sanctuary. We add to our rescued dogs at the rate of over 200 dogs a year that come by air, road and train from over 30 cities across India. For a dog that has no hope and no home across India, there is VOSD.VOSD makes the most loved over the counter products for dogs including tick & flea treatments, shampoos etc. VOSD products are made & sold exclusively by VOSD. 100% proceeds support the dogs of the VOSD Sanctuary & Hospital.",
};
const campaigns = [
  {
    name: "Clean Water Initiative",
    description: "Providing clean drinking water to communities in need.",
    status: "Completed",
  },
  {
    name: "Education for All",
    description: "Ensuring every child has access to quality education.",
    status: "Ongoing",
  },
  {
    name: "Healthcare Access",
    description:
      "Improving access to healthcare services for underprivileged populations.",
    status: "Completed",
  },
  {
    name: "Environmental Conservation",
    description: "Protecting natural habitats and preserving biodiversity.",
    status: "Ongoing",
  },
  {
    name: "Food Security Program",
    description:
      "Addressing hunger and malnutrition through sustainable food solutions.",
    status: "Completed",
  },
  {
    name: "Women Empowerment Initiative",
    description:
      "Empowering women through education, skills training, and advocacy.",
    status: "Ongoing",
  },
  {
    name: "Disaster Relief Efforts",
    description:
      "Providing aid and support to communities affected by natural disasters.",
    status: "Completed",
  },
  {
    name: "Youth Development Program",
    description:
      "Fostering the growth and development of young people through mentorship and education.",
    status: "Ongoing",
  },
  {
    name: "Economic Empowerment Project",
    description:
      "Supporting entrepreneurship and job creation in underserved communities.",
    status: "Completed",
  },
  {
    name: "Animal Welfare Campaign",
    description: "Promoting the welfare and protection of animals.",
    status: "Ongoing",
  },
];
*/
