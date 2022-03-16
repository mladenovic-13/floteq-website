import React from 'react';
import Footer from './Footer';
import HeaderBlack from './HeaderBlack';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderBlack />
      <main className="w-full text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
