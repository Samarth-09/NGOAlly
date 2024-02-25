import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Loginngo() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:3003/ngo/login", {
          id: parseInt(id),
          pwd: password,
        })
        .then((res) => {
          if (res.data.msg === "Login successful") {
            alert("NGO logined successfully");
            localStorage.setItem('userID', id);
            setLoggedIn(true);
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
      {loggedIn ? (
        <div>
          <h1 style={{ textAlign: "center" }}>User logged in successfully!</h1>
          <div  className="my-5" style={{display:'grid', alignContent:'center', paddingLeft:'20%'}}>
              <button className="btn btn-primary" style={{width:'25vw', border:'none'}}>
                <Link className="text-light" style={{textDecoration:'none'}} to="/ngo-dashboard">Go to Dashboard</Link>
              </button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
