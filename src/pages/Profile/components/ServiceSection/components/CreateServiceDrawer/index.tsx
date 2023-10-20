import { CustomDrawer } from "@components";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useForm } from "antd/es/form/Form";
import usePostService from "@hooks/usePostService.ts";
import { UserContext } from "@store";

const CreateServiceDrawer: FC<{
  drawerState: "open" | "closed" | "update";
  setDrawerState: Dispatch<SetStateAction<"open" | "closed" | "update">>;
}> = ({ drawerState, setDrawerState }) => {
  const [form] = useForm();
  const { createService } = usePostService();
  const user = useContext(UserContext);
  return (
    <CustomDrawer
      drawerState={drawerState}
      setDrawerState={setDrawerState}
      headerTitle={"service"}
      headerDescription={""}
      form={form}
    >
      <div className="h-full bg-white flex-1 overflow-y-auto">
        <div className="flex flex-1 flex-col justify-between">
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 pb-5 pt-6">
              <Form
                layout="vertical"
                onFinish={({ price, ...values }) =>
                  createService({
                    ...values,
                    price: +price,
                    businessId: user?.businesses[0].id,
                  })
                }
                name="service"
                form={form}
              >
                <FormItem label="Name" name="name">
                  <Input className="custom_input" />
                </FormItem>
                <FormItem label="Duration" name="duration">
                  <Input className="custom_input" />
                </FormItem>
                <FormItem label="Price" name="price">
                  <Input className="custom_input" type="number" />
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </CustomDrawer>
  );
};

export default CreateServiceDrawer;
