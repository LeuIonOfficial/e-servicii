import { FC, ReactNode } from "react";

const HomePage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      <div>{children}</div>
    </div>
  );
};

export default HomePage;
