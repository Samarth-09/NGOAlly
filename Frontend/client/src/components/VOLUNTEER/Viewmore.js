import React,{useEffect} from "react";
import axios from "axios";

export default function Viewmore() {
  // const [ngo, setName] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [projectNeeds, setprojectNeeds] = useState(null);
  // const [host, setHost] = useState(null);
  // const [setApplicationDate, setapplicationDate] = useState(null);
  // const [campaignDate, setcampaignDate] = useState(null);
  // const [canApply, setcanApply] = useState(null);
  // const [status, setStatus] = useState(null);
  const volunteerID = localStorage.getItem("userID");
  const campaignID = localStorage.getItem("viewmoreKey");
  let data1, data2, data3, data4, data5, data6, data7, data8;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/ngo/dashboard?volunteerId=${volunteerID}&campaignId=${campaignID}}`
        );

        data1 = response.data.name;
        data2 = response.data.location;
        data3 = response.data.ProjectNeeds;
        data4 = response.data.host;
        data5 = response.data.applicationDate;
        data6 = response.data.campaignDate;
        data7 = response.data.canApply; //true or false
        data8 = response.data.status;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container text-light">
      <p>{data1}</p>
    </div>
  );
}
