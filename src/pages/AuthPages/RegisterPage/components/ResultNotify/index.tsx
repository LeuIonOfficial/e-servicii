import React from "react";
import { Link } from "react-router-dom";
import routes from "@routes";

const ResultNotify: React.FC = () => (
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">Great news</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        You have successfully registered!
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Looking forward to see you logged in
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to={routes.login}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </Link>
        <Link to={routes.home} className="text-sm font-semibold text-gray-900">
          Home Page
        </Link>
      </div>
    </div>
  </main>
);

export default ResultNotify;