import { useParams } from "react-router-dom";
import {  Collapse, Card, Carousel,Steps ,Button, Form, Input} from "antd";
const { Meta } = Card;

const contentStyle = {
  height: "360px",
  width: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const ParkDetails = (props) => {
  const { parkId } = useParams();
  const selectedPark = props.parkList?.find((park) =>  park._id === parkId);
  const onChange = (currentSlide) => {
    console.log(currentSlide);};
const description = 'This is a description.';
const styles = {
    header: {
      backgroundImage: `url(${selectedPark?.plan})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }
  }
    

  const items = [
    {
      key: '1',
      label: 'Vision',
      children: <p>{selectedPark?.description}</p>,
    },
    {
        key: '2',
        label: 'Concept Design',
        children: <Carousel afterChange={onChange}>
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
      </Carousel>,
      },
    {
      key: '3',
      label: 'Development Status',
      children: <Steps
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
    />,
    },
    {
        key: '4',
        label: 'Feedback',
        children:  <Form
        name="wrap"
        labelCol={{
          flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="Title"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Feedback"
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>,
      },
  ];
  return (
    <>
      {selectedPark ? (
        <>
                   <h3>{selectedPark.name}</h3>
                   <p>Target Completion : {selectedPark.targetCompletion}</p>
        <div style={styles.header}>
  <div style={styles.content}>




           <Collapse accordion items={items} />
           </div>
           </div>
         </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ParkDetails;
