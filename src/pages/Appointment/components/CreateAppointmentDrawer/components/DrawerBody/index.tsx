import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

const DrawerBody = () => {
  return (
    <div className="h-full bg-white flex-1 overflow-y-auto">
      <div className="flex flex-1 flex-col justify-between">
        <div className="divide-y divide-gray-200 px-4 sm:px-6">
          <div className="space-y-6 pb-5 pt-6">
            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Project name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="project-name"
                  id="project-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <fieldset>
              <legend className="text-sm font-medium leading-6 text-gray-900">
                Privacy
              </legend>
              <div className="mt-2 space-y-4">
                <div className="relative flex items-start">
                  <div className="absolute flex h-6 items-center">
                    <input
                      id="privacy-public"
                      name="privacy"
                      aria-describedby="privacy-public-description"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      defaultChecked
                    />
                  </div>
                  <div className="pl-7 text-sm leading-6">
                    <label
                      htmlFor="privacy-public"
                      className="font-medium text-gray-900"
                    >
                      Public access
                    </label>
                    <p
                      id="privacy-public-description"
                      className="text-gray-500"
                    >
                      Everyone with the link will see this project.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-start">
                    <div className="absolute flex h-6 items-center">
                      <input
                        id="privacy-private-to-project"
                        name="privacy"
                        aria-describedby="privacy-private-to-project-description"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="pl-7 text-sm leading-6">
                      <label
                        htmlFor="privacy-private-to-project"
                        className="font-medium text-gray-900"
                      >
                        Private to project members
                      </label>
                      <p
                        id="privacy-private-to-project-description"
                        className="text-gray-500"
                      >
                        Only members of this project would be able to access.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-start">
                    <div className="absolute flex h-6 items-center">
                      <input
                        id="privacy-private"
                        name="privacy"
                        aria-describedby="privacy-private-to-project-description"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="pl-7 text-sm leading-6">
                      <label
                        htmlFor="privacy-private"
                        className="font-medium text-gray-900"
                      >
                        Private to you
                      </label>
                      <p
                        id="privacy-private-description"
                        className="text-gray-500"
                      >
                        You are the only one able to access this project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="pb-6 pt-4">
            <div className="flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
              >
                <LinkIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                  aria-hidden="true"
                />
                <span className="ml-2">Copy link</span>
              </a>
            </div>
            <div className="mt-4 flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center text-gray-500 hover:text-gray-900"
              >
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2">Learn more about sharing</span>
              </a>
            </div>
          </div>
          <div className="pb-6 pt-4">
            <div className="flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
              >
                <LinkIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                  aria-hidden="true"
                />
                <span className="ml-2">Copy link</span>
              </a>
            </div>
            <div className="mt-4 flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center text-gray-500 hover:text-gray-900"
              >
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2">Learn more about sharing</span>
              </a>
            </div>
          </div>
          <div className="pb-6 pt-4">
            <div className="flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
              >
                <LinkIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                  aria-hidden="true"
                />
                <span className="ml-2">Copy link</span>
              </a>
            </div>
            <div className="mt-4 flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center text-gray-500 hover:text-gray-900"
              >
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2">Learn more about sharing</span>
              </a>
            </div>
          </div>
          <div className="pb-6 pt-4">
            <div className="flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
              >
                <LinkIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                  aria-hidden="true"
                />
                <span className="ml-2">Copy link</span>
              </a>
            </div>
            <div className="mt-4 flex text-sm">
              <a
                href="#"
                className="group inline-flex items-center text-gray-500 hover:text-gray-900"
              >
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2">Learn more about sharing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerBody;
