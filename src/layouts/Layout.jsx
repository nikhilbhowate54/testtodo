import React from "react";
import { Col, Flex, Layout, Row } from "antd";
import Nav from "../components/navbar/Nav";
const { Header, Footer, Sider, Content } = Layout;
import { Typography } from "antd";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCards from "../components/cards/ItemCards";
const { Text, Link } = Typography;
const Layouts = () => {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#ffffff",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "black",
    backgroundColor: "#ffffff",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
  };
  const footerStyle = {
    textAlign: "center",
    minHeight: 160,
    color: "#fff",
    backgroundColor: "#ffffff",
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(100% )",
    maxWidth: "calc(100% )",
    minHeight: 120,
  };

  return (
    <>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Nav />
          </Header>
          <Layout>
            <Content style={contentStyle}>
              <Row>
                <Col xs={1} sm={2}></Col>
                <Col xs={22} sm={20}>
                  {/* <Space direction="row"> */}           
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/resturent" element={<ItemCards/>}/>
                  </Routes>
                  {/* <Typography.Title level={2} type="success">
                    Easy, pleasant and productive PDF editor
                  </Typography.Title> */}
                  {/* </Space> */}
                </Col>
                <Col xs={1} sm={2}>
                 
                </Col>
              </Row>
            </Content>
            {/* <Sider width="25%" style={siderStyle}>
          Sider
        </Sider> */}
          </Layout>
          <Footer style={footerStyle}>
            <br />
            <br />
            {/* Footer */}
          </Footer>
        </Layout>
      </Flex>
    </>
  );
};

export default Layouts;
