import React,{useState} from "react";
import axios from "axios";

export default function Loginvol() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(id)
      console.log(password)
      const response = await axios
        .post("http://localhost:3003/volunteer/login", {
          id: parseInt(id),
          pwd: password,
        })
        .then((res) => {
          if (res.data.message === "Volunteer logged in successfully") {
            alert("Volunteer logined successfully");
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
