import React, { Children } from 'react';

const Wrapper = ({ isDark, children }) => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,0.00) 0%, rgba(239,239,239,0.33) 48%, rgba(193,193,193,0.35) 77%, #D8D8D8 100%)',
      }}
      className="m-4 p-8 lg:m-12 lg:p-16 rounded-md shadow-lg"
    >
      {children}
    </div>
  );
};

export default Wrapper;
