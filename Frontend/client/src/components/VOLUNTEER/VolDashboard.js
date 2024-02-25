import React,{useState,useEffect} from "react";
import axios from "axios";
import ngoimg from "../assets/ngo.jpg";
export default function VolDashboard() {
  
  const userID = localStorage.getItem('userID');

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

  const [volunteer, setVolunteer] = useState(null);
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/volunteer/dashboard?id=${userID}`
        );

        const data1 = response.data.data1;
        const data2 = response.data.data2;

        setVolunteer(data1);
        setCampaign(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-light container">
      {volunteer ? (
        <>
          <h1
            className="text-primary"
            style={{
              marginTop: "3%",
              textAlign: "center",
              fontWeight: "bold",
              //   marginBottom: "2%",
            }}
          >
            Volunteer Details
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
              <p>
                <b>Name:</b> {volunteer.name}
              </p>
              <p>
                <b>Age:</b> {volunteer.age}
              </p>
              <p>
                <b>Gender:</b> {volunteer.gender}
              </p>
              <p>
                <b>Campaign Count:</b> {volunteer.campaignCount}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {/* -------------------------------------------------------------------------------- */}

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

      {/* --------------------------------------------------------------------- */}
      {campaign ? (
        <>
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

// const volunteer = {
//   name: "Manav Patel",
//   age:"20",
//   gender:"Male",
//   campaignCount: "5",
// };

// const campaigns = [
//   {
//     name: "Education for All",
//     description: "Ensuring every child has access to quality education.",
//     result: "PENDING",
//     status: "Completed",
//   },

//   {
//     name: "Environmental Conservation",
//     description: "Protecting natural habitats and preserving biodiversity.",
//     result: "GRANTED",
//     status: "Ongoing",
//   },

//   {
//     name: "Women Empowerment Initiative",
//     description:
//       "Empowering women through education, skills training, and advocacy.",
//     result: "GRANTED",
//     status: "Ongoing",
//   },

//   {
//     name: "Youth Development Program",
//     description:
//       "Fostering the growth and development of young people through mentorship and education.",
//     result: "PENDING",
//     status: "Completed",
//   },

//   {
//     name: "Animal Welfare Campaign",
//     description: "Promoting the welfare and protection of animals.",
//     result: "GRANTED",
//     status: "Ongoing",
//   },
//   {
//     name: "Clean Water Initiative",
//     description: "Providing clean drinking water to communities in need.",
//     result: "GRANTED",
//     status: "Ongoing",
//   },
//   {
//     name: "Healthcare Access",
//     description:
//       "Improving access to healthcare services for underprivileged populations.",
//     result: "REJECTED",
//     status: "Completed",
//   },
//   {
//     name: "Food Security Program",
//     description:
//       "Addressing hunger and malnutrition through sustainable food solutions.",
//     result: "GRANTED",
//     status: "Ongoing",
//   },
//   {
//     name: "Disaster Relief Efforts",
//     description:
//       "Providing aid and support to communities affected by natural disasters.",
//     result: "REJECTED",
//     status: "Ongoing",
//   },
//   {
//     name: "Economic Empowerment Project",
//     description:
//       "Supporting entrepreneurship and job creation in underserved communities.",
//     result: "PENDING",
//     status: "Completed",
//   },
// ];
