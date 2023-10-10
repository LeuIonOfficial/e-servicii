import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Button, Drawer, FormInstance, Space } from "antd";

const CustomDrawer: FC<{
  title: string;
  width: string;
  open: "create" | "update" | "closed";
  setOpen: Dispatch<SetStateAction<"create" | "update" | "closed">>;
  form?: FormInstance;
  children: ReactNode;
}> = ({ title, width, open, setOpen, form, children }) => {
  return (
    <Drawer
      title={title}
      width={width}
      open={open === "create" || open === "update"}
      onClose={() => {
        setOpen("closed");
        form?.resetFields();
      }}
      extra={
        <Space>
          <Button
            onClick={() => {
              setOpen("closed");
              form?.resetFields();
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            className="bg-blue-500"
            htmlType="submit"
            onClick={() => {
              form?.submit();
            }}
          >
            Submit
          </Button>
        </Space>
      }
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
