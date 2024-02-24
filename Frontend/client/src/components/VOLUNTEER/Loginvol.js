import React from "react";

export default function Loginvol() {
  return (
    <div>
      <div
        className="col-10 bg-color-createcampaign container"
        style={{ borderRadius: "8px" }}
      >
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label
            for="volid"
            style={{ marginTop: "2%" }}
            className="form-label font-family-label"
          >
            Volunteer Id
          </label>
          <input
            type="text"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="volid"
            placeholder="Enter your Volunteer Id"
          />
        </div>
        <div className="mb-3" style={{ marginTop: "1%" }}>
          <label for="password" className="form-label font-family-label">
            Password
          </label>
          <input
            type="password"
            className="form-control text-light bg-dark createcampaign-placeholder"
            id="password"
            placeholder="Enter your password"
          />
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
