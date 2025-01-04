import "./ParkDetails.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Collapse,
  Card,
  Carousel,
  Steps,
  Flex,
  Button,
  Form,
  Input,
} from "antd";
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
  console.log(parkId);
  const selectedPark = props.parkList?.find((park) => park._id === parkId);
  const initialState = {
    _id: parkId,
    feedbackType: "Partnership",
    feedback: "",
  };
  console.log(initialState);
  const [formData, setFormData] = useState(initialState);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const styles = {
    header: {
      backgroundImage: `url(${selectedPark?.plan})`,
      height: "30vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
    },
  };

  const description = "Estimated 1 year for completion";

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFeedback(formData);
    setFormData(initialState);
    navigate("/thankyou");
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const items = [
    {
      key: "1",
      label: "Vision",
      children: <p>{selectedPark?.description}</p>,
    },
    {
      key: "2",
      label: "Concept Design",
      children: (
        <Carousel afterChange={onChange}>
          <div className="container">
            <h3 style={contentStyle}>
              <img alt={selectedPark?.name} src={selectedPark?.plan} />
            </h3>
          </div>
          <div className="container">
            <h3 style={contentStyle}>
              <img width="auto" alt="example" src={selectedPark?.perspective} />
            </h3>
          </div>
        </Carousel>
      ),
    },
    {
      key: "3",
      label: "Development Status",
      children: (
        <Steps
          current={selectedPark?.status}
          items={[
            {
              title: "Planning",
              subTitle: "Left 00:00:08",
              description,
            },
            {
              title: "Concept Design",
              description,
            },
            {
              title: "Environmental Impact Assessment",
              subTitle: "Left 00:00:08",
              description,
            },
            {
              title: "Authority Submission",
              subTitle: "Left 00:00:08",
              description,
            },
            {
              title: "Construction",
            },
            {
              title: "Open to Public",
            },
          ]}
        />
      ),
    },
    {
      key: "4",
      label: "Feedback",
      children: (
        <form onSubmit={handleSubmit}>
          <h3>
            Let us know how you would like to be part for this park project!{" "}
          </h3>
          <input
            type="hidden"
            id="_id"
            name="_id"
            value={selectedPark?._id}
            onChange={handleChange}
          />
          <label htmlFor="category"> Category: </label>
          <select
            required
            id="feedbackType"
            name="feedbackType"
            onChange={handleChange}
            value={formData.feedbackType}
          >
            <option value="Partnership">Partnership Proposal</option>
            <option value="Feedback">Feedback</option>
            <option value="EngageMe">Keep Me Posted</option>
          </select>

          <br />
          <br />

          <label htmlFor="feedback">Feedback </label>
          <br />
          <textarea
            rows={10}
            cols={40}
            required
            type="text"
            id="feeback"
            name="feedback"
            placeholder=""
            onChange={handleChange}
          />

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      ),
    },
  ];
  return (
    <>
      {selectedPark ? (
        <>
          <div>
            <h2>{selectedPark.name}</h2>
            <p>Target Completion : {selectedPark.targetCompletion}</p>
          </div>
          <Flex justify="flex-start" align="center"></Flex>

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
