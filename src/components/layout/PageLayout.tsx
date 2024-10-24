import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const PageLayout: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <section
      className={`w-[97%] py-5 px-3 mx-auto bg-shadeBackground my-7 rounded-[20px] ${className}`}
    >
      {children}
    </section>
  );
};

export default PageLayout;
