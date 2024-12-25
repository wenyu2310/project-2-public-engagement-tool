import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Flex, Anchor } from "antd";

const NavBar = () => {
  return (
    <>
      <div>
        <Flex justify="space-between" align="center">
            <div>
                <img src="https://www.nparks.gov.sg/-/media/national-parks-board-logo.png?h=128&w=83" alt="NParks logo" height="100"/>
            </div>
            <div>
                <h1>Public Engagement Portal</h1>
            </div>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar icon={<UserOutlined />} />
              <h5>Username</h5>
            </Space>
          </Space>
        </Flex>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "home",
              href: "/",
              title: "Home",
            },
            {
              key: "partnerships",
              href: "/partnerships",
              title: "Partnerships",
            },
            {
              key: "projects",
              href: "/projects",
              title: "Projects",
            },
          ]}
        />
      </div>
      {/* <div>
      <div
        id="home"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="partnerships"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="projects"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
    </div> */}
    </>
  );
};

export default NavBar;
