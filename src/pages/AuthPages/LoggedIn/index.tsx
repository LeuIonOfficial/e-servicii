import Header from "./Header";
import { FC, ReactNode } from "react";

const LoggedIn: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-full">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default LoggedIn;
