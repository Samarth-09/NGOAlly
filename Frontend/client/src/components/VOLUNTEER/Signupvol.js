import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Signupvol() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [filter, setFilter] = useState("");

  const GenderList = [{ gender: "Male" }, { gender: "Female" }];

  const handleSelect = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let locationFilter = location.concat(",", filter);
      const spli = locationFilter.split(",");
      console.log(spli);
      const response = await axios
        .post("http://localhost:3003/volunteer/register", {
          name: name,
          email: email,
          age: age,
          gender: selectedGender,
          id: id,
          pwd: password,
          filters: spli,
        })
        .then((res) => {
          if (res.data.msg === "Volunteer registered successfully") {
            alert("Volunteer registered successfully");
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
          <div className="mb-3" style={{ marginTop: "2%" }}>
            <label
              for="volname"
              style={{ marginTop: "2%" }}
              className="form-label font-family-label"
            >
              Volunteer Name
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="volname"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              style={{ marginTop: "2%" }}
              for="volunteeremail"
              className="form-label font-family-label"
            >
              Volunteer Email
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="volunteeremail"
              placeholder="Enter your Volunteer email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="volage" className="form-label font-family-label">
              Age
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="volage"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label
              for="Gender"
              className="form-label font-family-label"
              style={{ marginRight: "2%" }}
            >
              Gender
            </label>
            <select value={selectedGender} onChange={handleSelect}>
              <option value="">Gender</option>
              {GenderList.map((value, ind) => (
                <option value={ind}>{value.gender}</option>
              ))}
            </select>
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="volid" className="form-label font-family-label">
              Volunteer Id{" "}
              <span className="text-danger">
                [This will be used as login credentials]
              </span>
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="ngoid"
              placeholder="Enter your Volunteer id"
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
            <label for="location" className="form-label font-family-label">
              Location
            </label>
            <input
              type="text"
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ marginTop: "1%" }}>
            <label for="filters" className="form-label font-family-label">
              Filters{" "}
              <span style={{ fontSize: "smaller" }}>
                [You may add specific postions on which you would like to
                contribute, or specific kind of campaigns which you like]
              </span>
            </label>
            <textarea
              className="form-control text-light bg-dark createcampaign-placeholder"
              id="filters"
              rows="3"
              placeholder="Enter filters comma separated [Example- veterinary doctor, animal care, care taker]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
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
