import React, { useState } from "react";
import { Button, Typography, Breadcrumb, Card } from "antd";
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
      <div style={{}}>
        <Breadcrumb
          items={[{ title: "Home" }, { title: "Queue" }]}
          separator=">"
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Card classNames={{ body: "!p-0" }}>
          <div className="flex justify-between items-center p-5">
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
        </Card>
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
