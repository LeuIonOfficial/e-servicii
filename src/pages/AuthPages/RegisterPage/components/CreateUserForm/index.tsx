import { Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Api } from "@services";
import { Dispatch, FC, SetStateAction } from "react";
import { UserRegisterType } from "@models/request/AuthRequest.ts";

const CreateUserForm: FC<{ setCurrent: Dispatch<SetStateAction<number>> }> = ({
  setCurrent,
}) => {
  const [form] = useForm();
  const handleFormSubmit = async (data: UserRegisterType) => {
    const response = await Api.auth.register(data);

    if (response.status === 201) {
      form.resetFields();
      notification.success({
        message: "You have successfully registered user",
      });
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 lg:py-[100px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form
            className="space-y-6"
            form={form}
            onFinish={handleFormSubmit}
            layout="vertical"
          >
            <div>
              <FormItem className="mt-2" label="Name" name="name">
                <Input
                  type="text"
                  required
                  name="email"
                  className="custom_input"
                />
              </FormItem>
            </div>
            <div>
              <FormItem className="mt-2" label="E-mail" name="email">
                <Input
                  type="text"
                  required
                  name="email"
                  className="custom_input"
                />
              </FormItem>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <FormItem className="mt-2" name="password">
                <Input
                  className="custom_input"
                  name="password"
                  type="password"
                />
              </FormItem>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </a>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateUserForm;
