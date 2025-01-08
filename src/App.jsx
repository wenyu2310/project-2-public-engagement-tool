import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as parkService from "./services/parkService";
import * as partnershipsService from "./services/partnershipsService"
import * as feedbackService from "./services/feedbackService"
import ParkList from "./components/ParkList";
import PartnershipsList from "./components/PartnershipsList"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Thankyou from "./components/Thankyou";
import ParkDetails from "./components/ParkDetails/ParkDetails";


import "./App.css";


const App = () => {
  const [parkList, setParkList] = useState([]);
  const [partnershipsList,setPartnershipsList] = useState([]);
  const [feedbackList,setFeedbackList] = useState([]);
  const addFeedback = (feedbackData) => {
    setFeedbackList([...feedbackList, feedbackData]);
  };
  const [isLoading,setIsloading] =useState(true)

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const data = await parkService.index();
        const data1= await partnershipsService.index();
        // console.log(data1.records)
        const parks = data.records?.map((park) => ({
          _id: park.fields._id,
          name: park.fields.name,
          description: park.fields.description,
          targetCompletion: park.fields.target_completion,
          plan: park.fields.plan,
          perspective: park.fields.perspective,
          stage: park.fields.stage,
          status:park.fields.status
        }));
        if (parks.error) {
          throw new Error(parks.error);
        }
        setParkList(parks);
        setIsloading(false)

        
      const partnerships = data1.records.map((partner) => ({
        _id: partner.fields._id,
        name: partner.fields.name,
        description: partner.fields.description,
        photo: partner.fields.photo
      }));
      if (partnerships.error) {
        throw new Error(partnerships.error);
      }
      setPartnershipsList(partnerships);
      setIsloading(false)
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchNames();
  }, []);
  const newSearchData = (searchTerm) => {
    setParkList(parkList.filter((park) => park.name === searchTerm));
  };
  const postFeedback=async(formData) =>{
     feedbackService.index(formData);
     console.log(formData)
  }
  // console.log(parkList);
  // console.log(JSON.stringify(feedbackList))
  return (
    <>
      <NavBar />
      {isLoading? (
        <h2>Loading...</h2>
      ):(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <ParkList parkList={parkList} newSearchData={newSearchData} />
          }
        />
        <Route
          path="/partnerships"
          element={<PartnershipsList partnershipsList={partnershipsList} />}
        />
        <Route
          path="/projects/:parkId"
          element={<ParkDetails parkList={parkList} addFeedback={addFeedback} postFeedback={postFeedback}/>}
        />
        <Route
          path="/thankyou"
          element={<Thankyou/>}
        />
      </Routes>
      )
      }
    </>
        
  );
};

export default App;
