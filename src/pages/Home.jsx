import React, { useEffect, useState } from "react";
import FoodCards from "../components/cards/FoodCards";
import { Input, Space } from "antd";
const { Search } = Input;
import { Typography } from "antd";
import { seedData } from "../data";
import axios from "axios";
const Home = () => {
  const [data,setData]=useState([])

  const onSearch = (value, _e, info) => console.log(info?.source, value);
useEffect(()=>{
  fetchApi()
},[])

const fetchApi=async()=>{
  try {
    const response=await axios.get('http://localhost:5000/restaurants')
    setData(response.data)
  } catch (error) {
    console.log(error);
  }
}
  return (
    <>
      <Typography.Title level={1} style={{ color: "#1677ff" }}>
        Food Delivery
      </Typography.Title>
      <Typography.Title level={2} type="success">
        Discover the best food & drinks
      </Typography.Title>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        size="large"
        style={{
          backgroundColor: "#ebf8f2",
        }}
      />
      <FoodCards seedData={seedData} />
    </>
  );
};

export default Home;
