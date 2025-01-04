import { Card ,Flex } from 'antd';

const { Meta } = Card;

const PartnershipList = (props) => {
  return (
    <>

      <h2>Our Partners</h2>
      {props.partnershipsList.map((partner) => (
        <>
        <Flex justify="center" gap="middle" vertical>
      <Card
  
            hoverable
            style={{ width: 800 }}
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
