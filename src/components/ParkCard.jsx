import { Link } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Carousel, Avatar, Card, Space, AutoComplete } from 'antd';
const { Meta } = Card;

const ParkCard = (props) => {
  const contentStyle = {
    height: '150px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  return (
<Space direction="vertical" size={16}>
    <Card
      title={<a href={`/projects/${props.park._id}`}>{props.park.name}</a>}
      style={{
        width: 300,
      }}
    >
      <p>{props.park.description}</p>

    </Card>
  
  </Space>
  )
};
export default ParkCard;