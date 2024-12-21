import { useState,useEffect } from 'react'
import * as parkService from './services/parkService'
import * as timelineService from './services/timelineService'
import ParkList from './components/ParkList'
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
            perspective: park.fields.perspective
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

return (
  <>
  <h1>Public Engagement Tool</h1>
  <ParkList parkList={parkList}/>
  </>
)
}


export default App;