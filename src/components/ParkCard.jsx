import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Carousel, Avatar, Card } from 'antd';
const { Meta } = Card;

const ParkCard = (props) => {
  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  return (
    <Card
      style={{
        width: 800,
      }}
      cover={<Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}><img
            width='800'
            alt= {props.park.name}
            src={props.park.plan}
          /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img
            width='800'
            alt="example"
            src={props.park.perspective}
          /></h3>
        </div>
      </Carousel>
        /*          
        */
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://i.pinimg.com/736x/b5/79/e8/b579e811c716d450f9b06ea14e0e547c.jpg" />}
        title={props.park.name}
        description={props.park.description}
      />
    </Card>
  )
};
export default ParkCard;