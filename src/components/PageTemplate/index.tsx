import { FC, ReactNode } from "react";

const PageTemplate: FC<{ title: string; children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
};

export default PageTemplate;
