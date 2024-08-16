import React from "react";
import { Button, Card, Col, Row, Typography, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import { useLocation } from "react-router-dom";

const ItemCards = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Typography.Title level={2} type="success">
        restaurants menu
      </Typography.Title>
      <Row gutter={16}>
        {location?.state?.map((item) => {
          return (
            <Col span={6} xs={24} xl={6}>
              <Card
                hoverable
                style={{
                  width: 300,
                  marginBottom: "1rem",
                }}
                cover={<img alt="example" src={`${item.image}`} />}
              >
                <Meta title={item.name} description={`price ${item.price}`} />
                <br />
                <Flex wrap gap="small" justify="center" align="center" className="site-button-ghost-wrapper">
                  <Button  danger>-</Button><Button  danger>+</Button>
                </Flex>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ItemCards;
