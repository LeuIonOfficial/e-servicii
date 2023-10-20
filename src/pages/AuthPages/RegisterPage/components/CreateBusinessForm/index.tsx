import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { Api } from "@services";
import { Dispatch, FC, SetStateAction } from "react";
import { BusinessType } from "@models/UserType.ts";

const CreateBusinessForm: FC<{
  setCurrent: Dispatch<SetStateAction<number>>;
}> = ({ setCurrent }) => {
  const handleSubmit = async (data: BusinessType) => {
    const response = await Api.business.postBusiness(data);
    if (response.status === 201) {
      setCurrent((prev) => prev + 1);
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 lg:py-[100px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your business
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6" onFinish={handleSubmit} layout="vertical">
          <div>
            <FormItem className="mt-2" label="Business Name" name="name">
              <Input
                type="text"
                required
                name="email"
                className="custom_input"
              />
            </FormItem>
          </div>
          <div>
            <FormItem className="mt-2" label="Description" name="description">
              <TextArea
                required
                name="email"
                className="custom_input"
                rows={4}
              />
            </FormItem>
          </div>
          <div>
            <FormItem className="mt-2" name="phone" label="Phone">
              <Input className="custom_input" name="phone" />
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
        </Form>
      </div>
    </div>
  );
};
export default CreateBusinessForm;
