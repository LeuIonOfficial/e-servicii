import { Button, Form, Input } from "antd";

export const formItems = [
  {
    item: (
      <Form.Item label=" ">
        <h1 className="text-2xl font-bold">Register</h1>
      </Form.Item>
    ),
  },
  {
    item: (
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          { required: true, message: "Please input your E-mail!" },
        ]}
      >
        <Input />
      </Form.Item>
    ),
  },
  {
    item: (
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
    ),
  },
  {
    item: (
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
    ),
  },
  {
    item: (
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="bg-blue-500 w-full">
          Submit
        </Button>
      </Form.Item>
    ),
  },
];
