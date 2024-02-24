import React, { useState } from "react";
import axios from "axios";
export default function Signupngo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [estyear, setEstyear] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:3003/ngo/register", {
          name: name,
          email: email,
          location: location,
          id: id,
          pwd: password,
          established: estyear,
          description: description,
        })
        .then((res) => {
          if (res.data.msg === "NGO registered successfully") {
            alert("NGO registered successfully");
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
      <form onSubmit={handleSubmit} style={{marginBottom:"4%"}}>
        <div
          className="col-10 bg-color-createcampaign container"
          style={{ borderRadius: "8px" }}
        >
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              style={{ marginTop: "2%" }}
              for="ngoname"
              className="form-label font-family-label"
            >
              NGO Name
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngoname"
              placeholder="Enter your NGO name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              style={{ marginTop: "2%" }}
              for="ngoemail"
              className="form-label font-family-label"
            >
              NGO Email
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngoemail"
              placeholder="Enter your NGO email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="ngolocation" className="form-label font-family-label">
              NGO Location
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngolocation"
              placeholder="Enter your NGO location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="ngoid" className="form-label font-family-label">
              NGO Id{" "}
              <span className="text-danger">
                [This will be used as login credentials]
              </span>
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngoid"
              placeholder="Enter your NGO id"
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
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="enddate" className="form-label font-family-label">
              Established Year
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="enddate"
              placeholder="Enter NGO establishment year"
              value={estyear}
              onChange={(e) => setEstyear(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              for="ngodescription"
              className="form-label font-family-label"
            >
              NGO description
            </label>
            <textarea
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngodescription"
              rows="3"
              placeholder="Enter your NGO description"
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
                marginBottom: "2%",
                marginTop: "2%",
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}