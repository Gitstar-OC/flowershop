import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  noMargin?: boolean;
  className?: string;
  id?: string;
  paperTexture?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, noMargin = false, className = '', id, paperTexture = false }) => {
  const marginClass = noMargin ? '' : ' m-0 md:mx-[20px] lg:mx-[60px] xl:mx-[100px]';
  const paperClass = paperTexture ? 'bg-surface' : '';
  return (
    <div className={paperClass}>
    <div id={id} className={`${marginClass} ${className} `}>
      {children}
    </div>
    </div>
  );
};

export default Wrapper;