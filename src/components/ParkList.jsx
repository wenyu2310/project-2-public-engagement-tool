import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ParkCard from "./ParkCard"

const ParkList = (props) =>{
    const [formData,setFormData] = useState('')
    const handleChange =(e) =>{
        setFormData(e.target.value)
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newSearchData(formData);
        setFormData('');
      };
      
    return(
        <>
        <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="park">Project Name:</label>
                <input
                    id="park"
                    type="text"
                    value={formData}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
        

        <h2>New Parks</h2>
        {props.parkList.map((park) => (
            <ParkCard key={park._id} park={park}/>
        ))}
        </>
    )
}

export default ParkList