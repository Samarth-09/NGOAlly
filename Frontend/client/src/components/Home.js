import React, { useState } from "react";
import Signupngo from "./NGO/Signupngo";
import Loginngo from "./NGO/Loginngo";
import Signupvol from "./VOLUNTEER/Signupvol";
import Loginvol from "./VOLUNTEER/Loginvol";
export default function Home(props) {
  const [signUp, setSignUp] = useState("NGO");
  const [logIn, setLogIn] = useState("NGO");

  const handleSignUpNGOClick = () => {
    setSignUp("NGO");
  };

  const handleSignUpVolunteerClick = () => {
    setSignUp("Volunteer");
  };

  const handleLoginNGOClick = () => {
    setLogIn("NGO");
  };

  const handleLoginVolunteerClick = () => {
    setLogIn("Volunteer");
  };

  return (
    <div>
      <div class="container px-4">
        <div class="row gx-4">
          <div class="col-md-6 col-12">
            <div
              className="bg-ngo-container"
              style={{ borderRadius: "8px", height: "98%" }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  marginTop: "3%",
                  paddingTop: "3%",
                }}
              >
                Signup
              </h1>
              <div className="row" style={{ marginBottom: "2%" }}>
                <div className="col-6 text-center">
                  {signUp === "NGO" ? (
                    <button
                      onClick={handleSignUpNGOClick}
                      type="button"
                      class="btn btn-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      NGO
                    </button>
                  ) : (
                    <button
                      onClick={handleSignUpNGOClick}
                      type="button"
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                        fontSize: "larger",
                      }}
                    >
                      NGO
                    </button>
                  )}
                </div>
                <div className="col-6 text-center">
                {signUp === "Volunteer" ? (
                    <button
                      onClick={handleSignUpVolunteerClick}
                      type="button"
                      class="btn btn-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      Volunteer
                    </button>
                  ) : (
                    <button
                      onClick={handleSignUpVolunteerClick}
                      type="button"
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                        fontSize: "larger",
                      }}
                    >
                      Volunteer
                    </button>
                  )}
                </div>
              </div>

              {/* ----------------------------- */}

              <div className="row">
                <div className="col-12">
                  {signUp === "NGO" ? <Signupngo /> : <Signupvol />}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div
              className="bg-ngo-container"
              style={{ borderRadius: "8px", height: "100%" }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  marginTop: "3%",
                  paddingTop: "3%",
                }}
              >
                Login
              </h1>
              <div className="row" style={{ marginBottom: "20%" }}>
                <div className="col-6 text-center">
                {(logIn === "NGO") ? (
                    <button
                      onClick={handleLoginNGOClick}
                      type="button"
                      class="btn btn-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      NGO
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginNGOClick}
                      type="button"
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                        fontSize: "larger",
                      }}
                    >
                      NGO
                    </button>
                  )}
                </div>
                <div className="col-6 text-center">
                {(logIn === "Volunteer") ? (
                    <button
                      onClick={handleLoginVolunteerClick}
                      type="button"
                      class="btn btn-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      Volunteer
                    </button>
                  ) : (
                    <button
                      onClick={handleLoginVolunteerClick}
                      type="button"
                      class="btn btn-primary"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "black",
                        fontSize: "larger",
                      }}
                    >
                      Volunteer
                    </button>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  {logIn === "NGO" ? <Loginngo onSubmit={props.onSubmit}/> : <Loginvol />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}