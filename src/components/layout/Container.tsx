import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string; 
};

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white w-full rounded-[15px] py-7 px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
