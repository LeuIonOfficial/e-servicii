import { Dispatch, FC, SetStateAction } from "react";
import { FormInstance } from "antd";

const DrawerFooter: FC<{
  setDrawerState: Dispatch<SetStateAction<"open" | "update" | "closed">>;
  form: FormInstance;
}> = ({ setDrawerState, form }) => {
  return (
    <div className="h-[10%] bg-white flex flex-shrink-0 justify-end px-4 py-4">
      <button
        type="button"
        className="rounded-md bg-white h-[40px] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => {
          setDrawerState("closed");
          form.resetFields();
        }}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="ml-4 inline-flex h-[40px] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => form.submit()}
      >
        Save
      </button>
    </div>
  );
};

export default DrawerFooter;
