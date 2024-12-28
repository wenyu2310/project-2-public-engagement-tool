import { useParams } from "react-router-dom";
import { Anchor, Collapse, Avatar, Card, Carousel,Steps ,Button, Form, Input} from "antd";

const contentStyle = {
  height: "360px",
  width: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ParkDetailsCopy = (props) => {
  const { parkId } = useParams();
  const selectedPark = props.parkList?.find((park) =>  park._id === parkId);
  const onChange = (currentSlide) => {
    console.log(currentSlide);};
const description = 'This is a description.';
    

  return (
<>
  <div
    style={{
      padding: '20px',
    }}
  >
    <Anchor
      direction="horizontal"
      items={[
        {
          key: 'part-1',
          href: '#part-1',
          title: 'Part 1',
        },
        {
          key: 'part-2',
          href: '#part-2',
          title: 'Part 2',
        },
        {
          key: 'part-3',
          href: '#part-3',
          title: 'Part 3',
        },
      ]}
    />
  </div>
  <div>
    <div
      id="part-1"
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        background: 'rgba(0,255,0,0.02)',
      }}
    /> <p>{selectedPark?.description}</p>
    <div
      id="part-2"
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        background: 'rgba(0,0,255,0.02)',
      }}
    /><Carousel afterChange={onChange}>
    <div>
      
      <h3 style={contentStyle}><img
        width='800'
        alt= {selectedPark?.name}
        src={selectedPark?.plan}
      /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img
        width='800'
        alt="example"
        src={selectedPark?.perspective}
      /></h3>
    </div>
  </Carousel>
    <div
      id="part-3"
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        background: '#FFFBE9',
      }}
    />
  </div><Steps
      current={0}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
</>
  )
};

export default ParkDetailsCopy;
