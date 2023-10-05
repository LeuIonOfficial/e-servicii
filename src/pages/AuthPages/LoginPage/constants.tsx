import { Button, Checkbox, Form, Input } from "antd";

export const formItems = [
  {
    item: (
      <Form.Item label=" " name="" rules={[]}>
        <h1 className="text-2xl font-bold">Login</h1>
      </Form.Item>
    ),
  },
  {
    item: (
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "Please input your E-mail!" },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
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
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
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
