import React from 'react';
import { Modal, Form, Input, InputNumber, Radio, Space, Button } from 'antd';
import { NewWorkerFormData } from '../../types/queue';

interface NewWorkerModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: NewWorkerFormData) => void;
}

const NewWorkerModal: React.FC<NewWorkerModalProps> = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm<NewWorkerFormData>();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="New Worker"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>Cancel</Button>,
        <Button key="create" type="primary" onClick={handleSubmit}>Create</Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the worker name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="maxRetries"
          label="Max Retries"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="timeout"
          label="Timeout"
          rules={[{ required: true }]}
        >
          <InputNumber min={100} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="concurrency"
          label="Concurrency"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="maxPerJob"
          label="Max Per Job"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="low">Low Priority</Radio>
              <Radio value="medium">Medium Priority</Radio>
              <Radio value="high">High Priority</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewWorkerModal;