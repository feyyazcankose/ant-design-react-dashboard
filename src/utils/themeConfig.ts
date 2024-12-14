import { theme } from "antd";

export const getThemeConfig = (isDarkMode: boolean) => ({
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
      groupTitleColor: isDarkMode ? "rgba(255, 255, 255, 0.85)" : "#666", // Grup Başlıkları Rengi
    },
    Table: {
      headerBg: isDarkMode ? "#141414" : "#fafafa",
      headerColor: isDarkMode ? "rgba(255, 255, 255, 0.85)" : "#666",
      rowHoverBg: isDarkMode ? "#1f1f1f" : "#fafafa",
      colorBgContainer: isDarkMode ? "#000" : "#fff",
      borderColor: isDarkMode ? "#303030" : "#f0f0f0",
    },
  },
});
