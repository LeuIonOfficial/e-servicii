import { Input } from "antd";
import { DesktopOutlined, PhoneOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export const formFields = [
  {
    name: "name",
    render: (
      <Input
        placeholder="Name"
        style={{ width: "300px" }}
        prefix={<DesktopOutlined />}
      />
    ),
  },
  {
    name: "description",
    render: (
      <TextArea placeholder="Description" style={{ width: "300px" }} rows={4} />
    ),
  },
  {
    name: "phone",
    render: (
      <Input
        placeholder="Phone"
        style={{ width: "300px" }}
        prefix={<PhoneOutlined />}
      />
    ),
  },
];
