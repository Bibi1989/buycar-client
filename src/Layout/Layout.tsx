import React from "react";
import { Layout, Row, Col } from "antd";
import Vehicles from "../components/Vehicles/Vehicles";
import Sidebar from "../components/Sidebar/Sidebar";

const { Content } = Layout;

const Layouts = () => {
  return (
    <Layout>
      <Content style={{ width: "100%" }}>
        <Row style={{ width: "100%" }}>
          <Col
            className='gutter-row'
            xxl={6}
            xl={6}
            lg={8}
            md={8}
            sm={8}
            xs={24}
          >
            <Sidebar />
          </Col>
          <Col xxl={17} xl={17} lg={15} md={15} sm={15} xs={24}>
            <Vehicles />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Layouts;
