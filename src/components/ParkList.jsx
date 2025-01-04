import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';
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
      const [position, setPosition] = useState('end');
      
    return(
        <>
        <h2>Projects Directory</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="park">Project Name:  </label>
                <input
                    id="park"
                    type="text"
                    value={formData}
                    onChange={handleChange}
                />
          {/* <Button
            icon={<SearchOutlined />}
            type="submit"
            iconPosition={position}
          /> */}
          <button type="submit"> Search</button>
            </form>
            <br/><br/>

        {props.parkList.map((park) => (
            <ParkCard key={park._id} park={park}/>


        ))}
        </>
    )
}

export default ParkList