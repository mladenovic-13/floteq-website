import React, { Children } from 'react';

const Wrapper = ({ isDark, children }) => {
  return (
    <div className={`${isDark ? 'bg-zinc-100' : ''} m-4 p-8 lg:m-12 lg:p-16 rounded-md shadow-lg`}>
      {children}
    </div>
  );
};

export default Wrapper;
