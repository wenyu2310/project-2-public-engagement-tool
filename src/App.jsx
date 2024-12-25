import { Route, Routes } from 'react-router-dom'
import { useState,useEffect } from 'react'
import * as parkService from './services/parkService'
import * as timelineService from './services/timelineService'
import ParkList from './components/ParkList'
import NavBar from './components/NavBar'
import Home from './components/home'

import './App.css'

const App = () => {
  const [parkList,setParkList] = useState([])
  


  useEffect(()=> {
    
    const fetchNames = async ()=>{
      try{
        const data = await parkService.index();
        //console.log(data.records)
        const parks = data.records.map((park)=>(
          {
            _id: park.fields._id,
            name: park.fields.name,
            description: park.fields.description,
            targetCompletion:park.fields.target_completion,
            plan: park.fields.plan,
            perspective: park.fields.perspective,
            stage: park.fields.stage
          }
        ))
        if (parks.error){
          throw new Error(parks.error)
        }
        setParkList(parks)
      } catch (error){
        console.log(error);
      }
    };
    fetchNames()



},[]);
const newSearchData= (searchTerm)=> {
  setParkList(parkList.filter((park) =>park.name === searchTerm ))
}
return (
  <>

  <NavBar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<ParkList parkList={parkList} newSearchData={newSearchData} />} />
    <Route path='/partnerships' element={<ParkList parkList={parkList}/>} />
  </Routes>

  </>
)
}


export default App;