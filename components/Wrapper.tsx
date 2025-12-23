import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  noMargin?: boolean;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, noMargin = false, className = '' }) => {
  const marginClass = noMargin ? '' : 'm-0 md:mx-[20px] lg:mx-[60px] xl:mx-[100px]';    
  return (
    <div className={`${marginClass} ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;