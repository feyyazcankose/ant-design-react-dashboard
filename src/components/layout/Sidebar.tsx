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

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
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
        },
        {
          key: "deployments",
          icon: <IconFolderUpload />,
          label: "Deployments",
        },
        {
          key: "commands",
          icon: <IconTerminal />,
          label: "Commands",
        },
        {
          key: "environment",
          icon: <IconDatabase />,
          label: "Environment Variables",
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
        },
        {
          key: "ssl",
          icon: <IconLock />,
          label: "SSL",
        },
        {
          key: "settings",
          icon: <IconSettings />,
          label: "Settings",
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
        },
        {
          key: "logs",
          icon: <IconFileText />,
          label: "Logs",
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
        }}
      />
    </div>
  );
};

export default Sidebar;
