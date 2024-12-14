import React, { useState } from "react";
import { Button, Typography, Breadcrumb } from "antd";
import QueuesTable from "../components/queues/QueuesTable";
import NewWorkerModal from "../components/queues/NewWorkerModal";
import { NewWorkerFormData } from "../types/queue";
import { useTheme } from "../theme/ThemeContext";

const { Title, Paragraph } = Typography;

const QueuesDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const handleNewWorker = (values: NewWorkerFormData) => {
    console.log("New worker values:", values);
    setIsModalOpen(false);
  };

  return (
    <div
      style={{ background: isDarkMode ? "#000" : "#fff", minHeight: "100%" }}
    >
      <div
        style={{
          padding: "16px 24px",
          borderBottom: `1px solid ${isDarkMode ? "#303030" : "#f0f0f0"}`,
        }}
      >
        <Breadcrumb
          items={[
            { title: "Home" },
            { title: "Servers" },
            { title: "Staging Server" },
            { title: "B7e5f9" },
            { title: "Queue" },
          ]}
          separator=">"
        />
      </div>
      <div style={{ padding: "24px" }}>
        <div
          style={{
            background: isDarkMode ? "#141414" : "#fff",
            borderRadius: 8,
            border: `1px solid ${isDarkMode ? "#303030" : "#f0f0f0"}`,
          }}
        >
          <div
            style={{
              padding: "24px",
              borderBottom: `1px solid ${isDarkMode ? "#303030" : "#f0f0f0"}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Title level={4} style={{ margin: 0 }}>
                Queues
              </Title>
              <Paragraph type="secondary" style={{ margin: "8px 0 0 0" }}>
                The list of queues of the current application. Note that the
                queues are not created automatically, you need to create them
                manually.
              </Paragraph>
            </div>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              New worker
            </Button>
          </div>
          <QueuesTable />
        </div>
      </div>
      <NewWorkerModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={handleNewWorker}
      />
    </div>
  );
};

export default QueuesDashboard;
