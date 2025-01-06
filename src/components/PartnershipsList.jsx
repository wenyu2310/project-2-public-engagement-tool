import { Card ,Flex } from 'antd';

const { Meta } = Card;

const PartnershipList = (props) => {
  return (
    <>

      <h2>Our Partners</h2>
      <p>Be involved in the design, development and management of Singapore's parks and green spaces across Singapore! 
 
 Sign up below and we will contact you for engagement sessions by the National Parks Board (NParks) if there are park redevelopments or new park developments near your area of residence.</p>
      {props.partnershipsList.map((partner) => (
        <>
        <Flex justify="center" gap="middle" vertical>
      <Card
  
            hoverable
            style={{ width: 1000 }}
            cover={
              <img
                alt={partner?.name}
                src={partner?.photo}
            
              />
            }
          >
            <Meta title={partner?.name} description={partner?.description} /><br/>
            {<a href="#">Join us!</a>} 
          </Card>
<br/>
        </Flex>

        </>
      ))}
    </>
  );
};

export default PartnershipList;
