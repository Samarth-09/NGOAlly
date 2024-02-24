import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NgoDashboard from "./components/NGO/NgoDashboard";
import NgoNav from "./components/NGO/NgoNav";
import VolNav from "./components/VOLUNTEER/VolNav";
import VolDashboard from "./components/VOLUNTEER/VolDashboard";
import Createcampaign from "./components/NGO/Createcampaign";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/ngo-dashboard"
            element={
              <div>
                <NgoNav />
                <NgoDashboard />
              </div>
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
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;