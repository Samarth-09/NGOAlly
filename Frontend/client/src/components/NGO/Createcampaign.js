import React from "react";

export default function Createcampaign() {
  return (
    <div>
      <h1 className="text-light text-center my-2">Invite Volunteers</h1>
      <div
        className="col-10 bg-color-createcampaign container"
        style={{ borderRadius: "8px"}}
      >
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="campaignname" className="form-label font-family-label">
            Campaign name
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="projectname"
            placeholder="Enter your campaign_name"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="projectlocation" className="form-label font-family-label">
            Campaign location
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="projectlocation"
            placeholder="Enter your campaign_location"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="projectneeds" className="form-label font-family-label">
            Project needs
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="projectneeds"
            placeholder="Enter your project_needs"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="begindate" className="form-label font-family-label">
            Begin Date
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="begindate"
            placeholder="Enter your begin_date in [DD/MM/YYY] format only"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="enddate" className="form-label font-family-label">
            End Date
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="enddate"
            placeholder="Enter your end_date in [DD/MM/YYY] format only"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
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
              marginBottom: "2%",
              marginTop: "2%",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}