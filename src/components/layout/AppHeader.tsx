import React from "react";
import { Layout, Button, Avatar, Space, theme } from "antd";
import {
  IconSun,
  IconMoonStar,
  IconSidebarFill,
  IconPerson,
} from "justd-icons";
import { useTheme } from "../../theme/ThemeContext";

const { Header } = Layout;
const { useToken } = theme;

interface AppHeaderProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onCollapse }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { token } = useToken();

  return (
    <Header
      style={{
        background: isDarkMode ? "#000" : "#fff",
        padding: "0 24px 0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${token.colorBorder}`,
        height: 56,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Button
          type="text"
          icon={<IconSidebarFill width={16} />}
          onClick={onCollapse}
          style={{ marginRight: 8 }}
        />
      </div>
      <Space size={16} align="center" className="flex">
        <Button
          type="text"
          icon={
            isDarkMode ? <IconSun width={16} /> : <IconMoonStar width={16} />
          }
          className="flex"
          onClick={toggleTheme}
        />
        <Space size={8} align="center">
          <Avatar size={32} icon={<IconPerson width={16} />} />
          <span style={{ fontWeight: 400 }}>Kurt Cobain</span>
        </Space>
      </Space>
    </Header>
  );
};

export default AppHeader;
