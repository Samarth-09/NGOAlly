import React, { useState, useEffect } from "react";
import axios from "axios";
import VolNav from "./VolNav";
export default function Campaignfeed() {
  const getColor = (status) => {
    switch (status) {
      case "GRANTED":
        return "text-success";
      case "PENDING":
        return "text-warning";
      case "REJECTED":
        return "text-danger";
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
          `http://localhost:3003/volunteer/dashboard?id=${userID}`
        );

        const data2 = response.data.data2;

        setCampaign(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
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
                    <p className={getColor(campaign.result)}>
                      Result: {campaign.result}
                    </p>
                  </div>
                  <div style={{ marginBottom: "1%" }}>
                    <button type="button" className="btn btn-primary">
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
    </div>
  );
}
