import { FC, ReactNode } from "react";

const LoggedIn: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>Logged in</h1>
      {children}
    </div>
  );
};

export default LoggedIn;
