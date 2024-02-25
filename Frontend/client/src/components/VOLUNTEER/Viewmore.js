import React, { useEffect, useState } from "react";
import axios from "axios";
import VolNav from "./VolNav.js";
import Footer from "../Footer.js";

export default function Viewmore() {
  const volunteerID = localStorage.getItem("userID");
  const campaignID = localStorage.getItem("viewmoreKey");
  // const [ngo, setName] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [projectNeeds, setprojectNeeds] = useState(null);
  // const [host, setHost] = useState(null);
  // const [setApplicationDate, setapplicationDate] = useState(null);
  // const [campaignDate, setcampaignDate] = useState(null);
  // const [canApply, setcanApply] = useState(null);
  // const [status, setStatus] = useState(null);

  const passData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3003/volunteer/apply?volunteerId=${volunteerID}&campaignId=${campaignID}`);

      if(response.data.msg==="done")
        {
          setStatus("pending");
        }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let btnString = "";

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [needs, setNeeds] = useState("");
  const [host, setHost] = useState("");
  const [appdate, setAppdate] = useState("");
  const [campdate, setCampdate] = useState("");
  const [apply, setApply] = useState("");
  const [status, setStatus] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    // Perform some action
    setIsButtonDisabled(true); // Disable the button
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/campaign/details?volunteerId=${volunteerID}&campaignId=${campaignID}`
        );

        const data1 = response.data.name;
        const data2 = response.data.location;
        const data3 = response.data.ProjectNeeds;
        const data4 = response.data.host;
        const data5 = response.data.applicationDate;
        const data6 = response.data.campaignDate;
        const data7 = response.data.canApply; //true or false
        const data8 = response.data.status;
        setName(data1);
        setLocation(data2);
        setNeeds(data3);
        setHost(data4);
        setAppdate(data5);
        setCampdate(data6);
        setApply(data7.toString());
        setStatus(data8);
        // console.log(apply);
        // console.log
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <VolNav></VolNav>
      <div className="container text-light">
        <h1 className="text-center my-3">Campaign Details.</h1>

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
                <b>Campain Host : </b>
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
              {!apply && <p>Application has ended</p>}
              {apply && status === "pending" && (
                <button
                  className="bg-warning text-light"
                  style={{ border: "none" }}
                  onClick={handleClick}
                  disabled={isButtonDisabled}
                >
                  Pending
                </button>
              )}
              {apply && status === "rejected" && (
                <button
                  className="bg-danger text-light"
                  style={{ border: "none" }}
                  onClick={handleClick}
                  disabled={isButtonDisabled}
                >
                  Rejected
                </button>
              )}
              {apply && status === "granted" && (
                <button
                  className="bg-success text-light"
                  style={{ border: "none" }}
                  onClick={handleClick}
                  disabled={isButtonDisabled}
                >
                  Granted
                </button>
              )}
              {apply && status === "not applied" && (
                <button
                  onClick={passData}
                  className="bg-primary text-light"
                  style={{ border: "none" }}
                  disabled={isButtonDisabled}
                >
                  Request
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
