import React, { useState } from "react";
import axios from "axios";
import NgoNav from "./NgoNav.js"
import Footer from "../Footer.js";
export default function Createcampaign() {
  const [name, setName] = useState("");
  const [campaignId, setcampaignId] = useState("");
  const [host, setHost] = useState("");
  const [location, setLocation] = useState("");
  const [needs, setNeeds] = useState("");
  const [beginApplicationDate, setbeginapplicationDate] = useState("");
  const [beginCampaignDate, setbegincampaignDate] = useState("");
  const [endApplicationDate, setendapplicationDate] = useState("");
  const [endCampaignDate, setendcampaignDate] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let applicationendbeginDate = beginApplicationDate.concat(
        "-",
        endApplicationDate
      );
      let campaignendbeginDate = beginCampaignDate.concat("-", endCampaignDate);
      const response = await axios
        .post("http://localhost:3003/campaign/create", {
          name: name,
          location: location,
          id: parseInt(campaignId),
          host: parseInt(host),
          ProjectNeeds: needs,
          applicationDate: applicationendbeginDate,
          description: description,
          campaignDate: campaignendbeginDate,
        })
        .then((res) => {
          if (res.data.msg === "done") {
            alert("Campaign registered successfully");
          } else {
            alert("Error");
          }
        })
        .catch((e) => {
          alert("Error in providing details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <NgoNav></NgoNav>
      <h1 className="text-light text-center my-4">Create Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div
          className="col-12 bg-color-createcampaign container"
          style={{ borderRadius: "8px" ,padding:"2%"}}
        >
          <div className="row">
            {/* --------------------------------------------------- */}

            <div className="mb-3 col-6">
              <label for="campaignid" className="form-label font-family-label">
                Campaign ID
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="campaignid"
                placeholder="Enter your campaign_id"
                value={campaignId}
                onChange={(e) => setcampaignId(e.target.value)}
              />
            </div>

            {/* --------------------------------------------------- */}

            <div className="mb-3 col-6">
              <label for="host" className="form-label font-family-label">
                Host
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="host"
                placeholder="Enter your ngo_id"
                value={host}
                onChange={(e) => setHost(e.target.value)}
              />
            </div>

            <div className="mb-3 col-6">
              <label
                for="campaignname"
                className="form-label font-family-label"
              >
                Campaign name
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="campaignname"
                placeholder="Enter your campaign_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3 col-6">
              <label
                for="projectlocation"
                className="form-label font-family-label"
              >
                Campaign location
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="projectlocation"
                placeholder="Enter your campaign_location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-3 col-6">
              <label
                for="beginapplicationdate"
                className="form-label font-family-label"
              >
                Begin Application Date
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="beginapplicationdate"
                placeholder="DD/MM/YYYY"
                value={beginApplicationDate}
                onChange={(e) => setbeginapplicationDate(e.target.value)}
              />
            </div>
            <div className="mb-3 col-6">
              <label
                for="endapplicationdate"
                className="form-label font-family-label"
              >
                End Application Date
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="endapplicationdate"
                placeholder="DD/MM/YYYY"
                value={endApplicationDate}
                onChange={(e) => setendapplicationDate(e.target.value)}
              />
            </div>
            <div className="mb-3 col-6">
              <label
                for="begincampaigndate"
                className="form-label font-family-label"
              >
                Begin Campaign Date
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="begincampaigndate"
                placeholder="DD/MM/YYYY"
                value={beginCampaignDate}
                onChange={(e) => setbegincampaignDate(e.target.value)}
              />
            </div>
            <div className="mb-3 col-6">
              <label
                for="endcampaigndate"
                className="form-label font-family-label"
              >
                End Campaign Date
              </label>
              <input
                type="text"
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="endcampaigndate"
                placeholder="DD/MM/YYYY"
                value={endCampaignDate}
                onChange={(e) => setendcampaignDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                for="projectneeds"
                className="form-label font-family-label"
              >
                Project needs
              </label>
              <textarea
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="projectneeds"
                rows="3"
                placeholder="Enter your project_needs"
                value={needs}
                onChange={(e) => setNeeds(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                for="projectdescription"
                className="form-label font-family-label"
              >
                Project description
              </label>
              <textarea
                className="form-control text-light bg-dark createcampaign-placeholder"
                id="projectdescription"
                rows="3"
                placeholder="Enter your project_description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="btn-createcampaign-form bg-danger"
                style={{
                  borderRadius: "5px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  paddingTop: "1%",
                  paddingBottom: "1%",
                  marginBottom: "-1%",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
  );
}
