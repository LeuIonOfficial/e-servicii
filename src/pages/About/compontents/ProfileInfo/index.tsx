import { Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "@store";
import FormItem from "antd/es/form/FormItem";
import { useForm } from "antd/es/form/Form";

const ProfileInfo = () => {
  const user = useContext(UserContext);
  const [form] = useForm();
  return (
    <Form
      colon={false}
      initialValues={user}
      form={form}
      layout="horizontal"
      labelCol={{ span: "6" }}
      labelWrap={true}
    >
      <FormItem label=" ">
        <span className="text-2xl font-bold pb-5">User Info</span>
      </FormItem>
      <FormItem label="Name" name="name">
        <Input className="w-[200px]" />
      </FormItem>
      <FormItem label="E-mail" name="email">
        <Input className="w-[200px]" />
      </FormItem>
      <FormItem label="Role" name="role">
        <Input className="w-[200px]" disabled />
      </FormItem>
    </Form>
  );
};

export default ProfileInfo;
