import { Dispatch, FC, Fragment, ReactNode, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DrawerHeader from "./components/DrawerHeader";
import DrawerFooter from "./components/DrawerFooter";
import { FormInstance } from "antd";

const CustomDrawer: FC<{
  drawerState: "open" | "update" | "closed";
  setDrawerState: Dispatch<SetStateAction<"open" | "update" | "closed">>;
  children: ReactNode;
  headerTitle: string;
  headerDescription: string;
  form: FormInstance;
}> = ({
  drawerState,
  setDrawerState,
  children,
  headerTitle,
  headerDescription,
  form,
}) => {
  return (
    <Transition.Root
      show={drawerState === "open" || drawerState === "update"}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10 h-full"
        onClose={() => setDrawerState("closed")}
      >
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <DrawerHeader
                    drawerState={drawerState}
                    setDrawerState={setDrawerState}
                    title={headerTitle}
                    description={headerDescription}
                  />
                  <div className="h-[80%] bg-white">{children}</div>
                  <DrawerFooter setDrawerState={setDrawerState} form={form} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CustomDrawer;
