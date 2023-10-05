import { Form, notification } from "antd";
import { formItems } from "./constants.tsx";
import { Api } from "@services";
import { useNavigate } from "react-router-dom";
import routes from "@routes";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (data: { email: string; password: string }) => {
    const response = await Api.auth.login(data);

    if (response.status >= 200 && response.status < 300) {
      notification.success({
        message: `Welcome ${data.email}`,
      });
      navigate(routes.authenticated.root);
    }
    if (response.status === 400 || response.status === 404) {
      notification.error({
        message: "Wrong credentials",
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Form
        name="basic"
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

export default LoginPage;
