import { TabsProps } from "antd";
import BusinessProfile from "./components/BusinessProfile";
import ServiceSection from "./components/ServiceSection";

export const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Business",
    children: <BusinessProfile />,
  },
  {
    key: "2",
    label: "Services",
    children: <ServiceSection />,
  },
];
