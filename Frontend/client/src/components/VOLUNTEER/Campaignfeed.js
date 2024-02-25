import React, { useState, useEffect } from "react";
import axios from "axios";
import VolNav from "./VolNav";
import Footer from "../Footer";

export default function Campaignfeed() {
  const getColor = (status) => {
    switch (status) {
      case "granted":
        return "text-success";
      case "Pending":
        return "text-warning";
      case "rejected":
        return "text-danger";
      case "not applied":
        return "text-secondary";
      default:
        return "text-secondary";
    }
  };
  const userID = localStorage.getItem("userID");
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/volunteer/campaignFeed?id=${userID}`
        );

        const data = response.data;
        console.log(data);

        setCampaign(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div>
      <VolNav />
      {campaign ? (
        <div className="text-light">
          <h1
            className="text-light"
            style={{ marginBottom: "3%", marginTop: "3%", textAlign: "center" }}
          >
            Ongoing Campaigns :{" "}
          </h1>
          <div
            className="row gy-3"
          >
            {campaign.map((campaign, index) => (
              <div>
                <div
                  className="col-10 bg-light text-dark"
                  key={index}
                  style={{ borderRadius: "8px", padding:'2%', marginLeft:'7%' }}
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
                    <p className={getColor(campaign.status)}>
                      Status: {campaign.status}
                    </p>
                  </div>
                  <div style={{ marginBottom: "1%" }}>
                    <button type="button" className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <Footer/>
    </>
  );
}
