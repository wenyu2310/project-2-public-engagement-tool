import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Carousel, Avatar, Card } from 'antd';
const { Meta } = Card;

const Home = () => {
  const contentStyle = {
    height: '400px',
    width: '1000px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  return (
  <>
  <h2>Welcome to the NParks Public Engagement Portal</h2>
  <p>Discover the green heartbeat of Singapore! At NParks, we’re dedicated to creating vibrant, sustainable spaces where nature thrives and communities flourish. This portal is your gateway to actively participate in shaping our city in nature.

Whether you’re here to explore upcoming park developments, contribute your ideas to enhance our green spaces, or learn more about conservation and biodiversity efforts, your voice matters. Together, let’s co-create a greener, more inclusive Singapore for generations to come.

Join us in our journey to nurture nature and grow community bonds. Get involved today!</p>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}><img
            alt= 'city in nature'
            src='https://www.nparks.gov.sg/-/media/nparks-real-content/homepage/carousel/2020/homepage_cityinnature4.jpg?h=432&w=1280'
          /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img
            width='800'
            alt="RRNP"
            src='https://a61.com.sg/assets/img/site_images/RRNP-Quarry-View.jpg'
          /></h3>
        </div>
      </Carousel>
       <h1></h1>
  </>

  )
};
export default Home;