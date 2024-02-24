import React, { useState } from "react";
import axios from "axios";
export default function Loginngo() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:3003/ngo/login", {
          id: id,
          password: password,
        })
        .then((res) => {
          if (res.data.msg === "Login successful") {
            alert("NGO logined successfully");
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
      <form onSubmit={handleSubmit}>
        <div
          className="col-10 bg-color-createcampaign container"
          style={{ borderRadius: "8px" }}
        >
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              for="ngoid"
              style={{ marginTop: "2%" }}
              className="form-label font-family-label"
            >
              NGO Id
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngoid"
              placeholder="Enter your NGO Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      </form>
    </div>
  );
}
