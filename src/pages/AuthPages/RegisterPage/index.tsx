import { Form, notification } from "antd";
import { formItems } from "./constants.tsx";
import { Api } from "@services";
import { useForm } from "antd/es/form/Form";
import { UserRegisterType } from "../../../models/request/AuthRequest.ts";
import { useNavigate } from "react-router-dom";
import routes from "@routes";

const RegisterPage = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish = async (data: UserRegisterType): Promise<void> => {
    const response = await Api.auth.register(data);

    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: "You have successfully registered",
      });
      form.resetFields();
      navigate(routes.login);
    }

    if (response.status === 409) {
      notification.error({
        message: "User with this credentials already exists",
      });
    } else {
      console.log(response);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Form
        name="basic"
        form={form}
        colon={false}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {formItems.map((el, index) => (
          <div key={index}>{el.item}</div>
        ))}
      </Form>
    </div>
  );
};

export default RegisterPage;
