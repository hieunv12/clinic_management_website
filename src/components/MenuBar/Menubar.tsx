import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
interface MenuItemType {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItemType[];
}
interface MenuBarProps {
  children: React.ReactNode;
  menuItems: MenuItemType[];
}
const MenuBar: React.FC<MenuBarProps> = ({ children, menuItems }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: "100vh", background: "white" }}>
      <Sider
        collapsed={collapsed}
        style={{
          width: 200,
          background: "#fff",
          borderRadius: 20,
          // margin: '16px',
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          // overflow: 'hidden'
        }}
        onCollapse={toggleCollapsed}
      >
        <Button
          // type="primary"
          onClick={toggleCollapsed}
          style={{
            borderRadius: "30%",
            transition: "all 0.3s",

            right: -16,
          }}
          className="absolute top-0 w-8 h-8 flex items-center justify-center"
        >
          {!collapsed ? <LeftOutlined /> : <RightOutlined />}
        </Button>
        <Menu
          mode="inline"
          items={menuItems}
          style={{ height: "100%", borderRight: 0 }}
        />
      </Sider>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

export default MenuBar;
