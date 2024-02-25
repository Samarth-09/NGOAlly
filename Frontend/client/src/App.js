import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NgoDashboard from "./components/NGO/NgoDashboard";
import NgoNav from "./components/NGO/NgoNav";
import VolNav from "./components/VOLUNTEER/VolNav";
import VolDashboard from "./components/VOLUNTEER/VolDashboard";
import Createcampaign from "./components/NGO/Createcampaign";
import Home from "./components/Home";
import Campaignfeed from "./components/VOLUNTEER/Campaignfeed";

function App() {

  const [ID, setID] = useState('');
  const getId = (data) => {
    
    setID(data);
    console.log(ID);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/ngo-dashboard"
            element={
              <>
                <NgoNav />
                <NgoDashboard />
              </>
            }
          />
          <Route
            path="/ngocreatecampaign"
            element={<Createcampaign></Createcampaign>}
          />
          <Route
            path="/volunteer-dashboard"
            element={
              <div>
                <VolNav />
                <VolDashboard />
              </div>
            }
          />
          <Route path="/" element={
            <Home></Home>
          } />
          <Route path="/feed" element={
            <Campaignfeed></Campaignfeed>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
