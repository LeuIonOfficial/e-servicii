import React from "react";
import { Tabs } from "antd";
import { items } from "./constants.tsx";

const BusinessPage: React.FC = () => (
  <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
    <Tabs defaultActiveKey="1" items={items} />
  </div>
);

export default BusinessPage;
