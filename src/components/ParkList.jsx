import ParkCard from "./ParkCard"

const ParkList = (props) =>{

    return(
        <>
        <h2>New Parks</h2>
        {props.parkList.map((park) => (
            <ParkCard key={park._id} park={park}/>
        ))}
        </>
    )
}

export default ParkList