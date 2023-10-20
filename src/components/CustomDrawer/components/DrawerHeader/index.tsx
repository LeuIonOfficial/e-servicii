import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, FC, SetStateAction } from "react";

const DrawerHeader: FC<{
  drawerState: "open" | "update" | "closed";
  setDrawerState: Dispatch<SetStateAction<"open" | "update" | "closed">>;
  title: string;
  description: string;
}> = ({ drawerState, setDrawerState, title, description }) => {
  return (
    <div className="h-[10%] bg-indigo-700 px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-base font-semibold leading-6 text-white">
          {drawerState === "open" ? (
            <span>Add new {title}</span>
          ) : drawerState === "update" ? (
            <span>Update {title}</span>
          ) : null}
        </Dialog.Title>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setDrawerState("closed")}
          >
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Close panel</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mt-1">
        <p className="text-sm text-indigo-300">{description}</p>
      </div>
    </div>
  );
};

export default DrawerHeader;
