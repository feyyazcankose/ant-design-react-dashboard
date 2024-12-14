import { Layout, ConfigProvider, theme } from "antd";
import Sidebar from "./components/layout/Sidebar";
import AppHeader from "./components/layout/AppHeader";
import QueuesDashboard from "./components/queues/QueuesDashboard";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";
import "./styles/global.css";
import React from "react";

const { Content, Sider } = Layout;

function AppContent() {
  const { isDarkMode } = useTheme();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#0078ff",
          borderRadius: 6,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        },
        components: {
          Layout: {
            bodyBg: isDarkMode ? "#000" : "#fff",
            siderBg: isDarkMode ? "#18181b" : "#f4f4f5",
            headerBg: isDarkMode ? "#000" : "#fff",
          },
          Menu: {
            itemBg: isDarkMode ? "#18181b" : "#f4f4f5",
            darkItemBg: isDarkMode ? "#18181b" : "#f4f4f5",
            itemSelectedBg: isDarkMode
              ? "rgba(0, 120, 255, 0.15)"
              : "rgba(0, 120, 255, 0.1)",
            itemSelectedColor: "#0078ff",
            itemHoverColor: "#0078ff",
            itemHoverBg: "transparent",
          },
          Table: {
            headerBg: isDarkMode ? "#141414" : "#fafafa",
            headerColor: isDarkMode ? "rgba(255, 255, 255, 0.85)" : "#666",
            rowHoverBg: isDarkMode ? "#1f1f1f" : "#fafafa",
            colorBgContainer: isDarkMode ? "#000" : "#fff",
            borderColor: isDarkMode ? "#303030" : "#f0f0f0",
          },
        },
      }}
    >
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
          <Content>
            <QueuesDashboard />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
