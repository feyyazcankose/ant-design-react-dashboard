import React, { useState } from "react";
import { Layout } from "antd";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import { useTheme } from "../../theme/ThemeContext";
import { routes } from "../../routes";
import { useRoutes } from "react-router-dom";
const { Content, Sider } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isDarkMode } = useTheme();
  const element = useRoutes(routes);
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
        collapsedWidth={80}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          borderRight: `1px solid ${isDarkMode ? "#303030" : "#f0f0f0"}`,
        }}
      >
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 270, minHeight: "100vh" }}>
        <AppHeader
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <Content>{element}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
