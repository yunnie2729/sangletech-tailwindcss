import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="mx-3 overflow-hidden bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
