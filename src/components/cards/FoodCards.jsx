import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

const FoodCards = (props) => {
  const { seedData } = props;
  const navigate=useNavigate()
  return (
    <div>
      <Row gutter={16}>
        {seedData?.map((item) => {
          return (
            <Col span={6} xs={24} xl={6}>
                <Card
                  hoverable
                  style={{
                    width: 280,
                    marginBottom: "1rem",
                  }}
                  onClick={()=>navigate('/resturent', { state: item.menu })}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta
                    title={item.name}
                    description={`rating ${item.rating}`}
                  />
                </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default FoodCards;
