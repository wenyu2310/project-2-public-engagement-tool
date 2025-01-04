
import {  Card, Space,Col, Divider, Row} from 'antd';


const ParkCard = (props) => {

  return (
<Space  >
<Divider orientation="right"> </Divider>
<Row gutter={[16, 24]}>
<Col className="gutter-row" span={6}>
    <Card
      title={<a href={`/projects/${props.park._id}`}>{props.park.name}</a>}
      style={{
        width: 300,
        height: 450
      }}
      cover={
        <img
          alt="example"
          src={props.park.plan}
        />}
    >
      <p>{props.park.description}</p>

    </Card>
  </Col>
  </Row>
  </Space>
  )
};
export default ParkCard;