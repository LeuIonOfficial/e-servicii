import { useNavigate } from "react-router-dom";

export const useSiderMenu = () => {
  const navigate = useNavigate();
  return [
    { title: "Online Booking", action: () => navigate("/booking") },
    { title: "Appointment Scheduling", action: () => navigate("/schedule") },
    { title: "Services", action: () => navigate("/services") },
  ];
};
