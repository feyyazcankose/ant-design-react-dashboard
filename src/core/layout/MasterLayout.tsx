import { Layout, ConfigProvider } from "antd";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import { routes } from "../../routes";
import { getThemeConfig } from "../../utils/themeConfig";

const { Content, Sider } = Layout;

export function MasterLayout() {
  const { isDarkMode } = useTheme();
  const [collapsed, setCollapsed] = React.useState(false);
  const element = useRoutes(routes);

  return (
    <ConfigProvider theme={getThemeConfig(isDarkMode)}>
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
            borderRight: `1px solid ${isDarkMode ? "#303030" : "#e6e6e6"}`,
          }}
        >
          <Sidebar collapsed={collapsed} />
        </Sider>
        <Layout
          style={{ marginLeft: collapsed ? 80 : 270, minHeight: "100vh" }}
        >
          <AppHeader
            collapsed={collapsed}
            onCollapse={() => setCollapsed(!collapsed)}
          />
          <Content style={{ padding: 24 }}>{element}</Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
