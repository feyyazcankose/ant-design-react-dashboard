import React from "react";
import { Menu } from "antd";
import {
  IconHome3,
  IconFolderUpload,
  IconTerminal,
  IconSettings,
  IconLock,
  IconFileText,
  IconShield,
  IconCloudSync,
  IconDatabase,
} from "justd-icons";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/ThemeContext";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const menuItems = [
    {
      key: "application",
      label: "Application",
      type: "group" as const,
      children: [
        {
          key: "site",
          icon: <IconHome3 />,
          label: "Site",
          onClick: () => navigate("/site"),
        },
        {
          key: "deployments",
          icon: <IconFolderUpload />,
          label: "Deployments",
          onClick: () => navigate("/deployments"),
        },
        {
          key: "commands",
          icon: <IconTerminal />,
          label: "Commands",
          onClick: () => navigate("/commands"),
        },
        {
          key: "environment",
          icon: <IconDatabase />,
          label: "Environment Variables",
          onClick: () => navigate("/environment"),
        },
      ],
    },
    {
      key: "configuration",
      label: "Configuration",
      type: "group" as const,
      children: [
        {
          key: "queue",
          icon: <IconCloudSync />,
          label: "Queue",
          onClick: () => navigate("/queue"),
        },
        {
          key: "ssl",
          icon: <IconLock />,
          label: "SSL",
          onClick: () => navigate("/ssl"),
        },
        {
          key: "settings",
          icon: <IconSettings />,
          label: "Settings",
          onClick: () => navigate("/settings"),
        },
      ],
    },
    {
      key: "rules-logs",
      label: "Rules & Logs",
      type: "group" as const,
      children: [
        {
          key: "security",
          icon: <IconShield />,
          label: "Security Rules",
          onClick: () => navigate("/security"),
        },
        {
          key: "logs",
          icon: <IconFileText />,
          label: "Logs",
          onClick: () => navigate("/logs"),
        },
      ],
    },
  ];

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          padding: collapsed ? "0" : "0 20px",
          fontWeight: "bold",
          fontSize: "16px",
          marginTop: "16px",
          color: isDarkMode ? "#fff" : "#000", // Dinamik metin rengi
          backgroundColor: isDarkMode ? "#18181b" : "#f4f4f5", // Dinamik arka plan
        }}
      >
        {collapsed ? "P" : "Portfoliosite"}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["queue"]}
        items={menuItems}
        inlineCollapsed={collapsed}
        style={{
          height: "calc(100% - 40px)",
          borderRight: "none",
          color: isDarkMode ? "#fff" : "#000", // Menü başlıkları için renk
        }}
      />
    </div>
  );
};

export default Sidebar;
