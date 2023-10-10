import { Form } from "antd";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { formFields } from "./constants.tsx";
import FormItem from "antd/es/form/FormItem";
import { useForm } from "antd/es/form/Form";
import usePostBusiness from "@hooks/usePostBusiness.ts";
import { CustomDrawer } from "../../../../../../components";
import { BusinessType } from "../../../../../../models/UserType.ts";

const AddBusiness: FC<{
  open: "create" | "update" | "closed";
  setOpen: Dispatch<SetStateAction<"create" | "update" | "closed">>;
  business: BusinessType | undefined;
}> = ({ open, setOpen, business }) => {
  const [form] = useForm();
  const { postBusiness, response, isSuccess } = usePostBusiness();
  console.log(response, isSuccess);

  useEffect(() => {
    if (open === "update") {
      form.setFieldsValue(business);
    }
    console.log(business);
  }, [open]);

  return (
    <CustomDrawer
      title="Add business"
      width="700px"
      open={open}
      setOpen={setOpen}
      form={form}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl m-10">Add Business</h1>
        <Form
          layout="horizontal"
          name="business"
          onFinish={(data) => {
            open === "create" ? postBusiness(data) : console.log("update");
          }}
          form={form}
        >
          {formFields.map(({ name, render }, index) => {
            return (
              <FormItem name={name} key={index} validateFirst>
                {render}
              </FormItem>
            );
          })}
        </Form>
        <h1 className="text-[#e6e6e6] text-[180px] font-[800] tracking-[-10px] mb-0">
          ESV
        </h1>
      </div>
    </CustomDrawer>
  );
};

export default AddBusiness;
