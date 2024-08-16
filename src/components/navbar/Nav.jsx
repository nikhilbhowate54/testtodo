import React, { useState } from "react";
import {
  HomeOutlined ,
  ShoppingCartOutlined ,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu,ConfigProvider, Modal } from "antd";
const items = [
  {
    label: "Home",
    key: "SubMenu",
    icon: <HomeOutlined  />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
{ label: "Cart",
  key: "cart",
  icon: <ShoppingCartOutlined />,}
];
const Nav = () => {
  const [current, setCurrent] = useState("mail");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    if(current==='cart') showModal()

  };
  console.log(current);
  return (
    <>
    <ConfigProvider  theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius:12,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}> <Menu  
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    /></ConfigProvider>
     <Modal title="Cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       total price
      </Modal>
    </>
   
  );
};
export default Nav;
