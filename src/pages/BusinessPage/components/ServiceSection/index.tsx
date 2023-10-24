import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import CreateServiceDrawer from "./components/CreateServiceDrawer";
import useGetServices from "@hooks/useGetServices.ts";
import { UserContext } from "@store";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ServiceSection = () => {
  const [drawerState, setDrawerState] = useState<"open" | "closed" | "update">(
    "closed",
  );
  const user = useContext(UserContext);
  const { services } = useGetServices(user?.businesses[0].id);

  console.log(services);

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Services
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="max-w-full space-y-10">
            <ul role="list" className="divide-y divide-gray-100">
              {(services &&
                services.map(
                  (service: {
                    id: number;
                    name: string;
                    price: number;
                    duration: { hours: number; minutes: number };
                  }) => (
                    <li
                      key={service.id}
                      className="flex items-center justify-between gap-x-6 py-5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {service.name}
                          </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                          <p className="whitespace-nowrap">{`${service.duration.hours} h, ${service.duration.minutes} m`}</p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                          <p className="whitespace-nowrap">
                            {service.price} MDL
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-none items-center gap-x-4">
                        <Menu as="div" className="relative flex-none">
                          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-50" : "",
                                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                                    )}
                                  >
                                    Edit
                                    <span className="sr-only">
                                      , {service.name}
                                    </span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-50" : "",
                                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                                    )}
                                  >
                                    Move
                                    <span className="sr-only">
                                      , {service.name}
                                    </span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-50" : "",
                                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                                    )}
                                  >
                                    Delete
                                    <span className="sr-only">
                                      , {service.name}
                                    </span>
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </li>
                  ),
                )) || <div>no services</div>}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setDrawerState("open")}
          >
            Add service
          </button>
        </div>
      </div>
      <CreateServiceDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
      />
    </div>
  );
};

export default ServiceSection;
