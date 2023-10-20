import React, { useState } from "react";
import { Steps } from "antd";
import CreateUserForm from "./components/CreateUserForm";
import ResultNotify from "./components/ResultNotify";
import CreateBusinessForm from "./components/CreateBusinessForm";

const steps = [
  {
    title: "User details",
    content: CreateUserForm,
  },
  {
    title: "Business details",
    content: CreateBusinessForm,
  },
  {
    title: "Success",
    content: ResultNotify,
  },
];

const RegisterPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const Content = steps[current].content;

  return (
    <div className="h-[100vh]">
      <div className="container mx-auto py-[60px] px-4 sm:px-6 lg:px-8 h-full">
        <Steps
          current={current}
          items={items}
          // onChange={onChange}
          labelPlacement="horizontal"
        />
        <Content setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default RegisterPage;
