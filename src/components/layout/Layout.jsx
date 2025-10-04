import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Toaster position="top-center"/>
      <Footer />
    </>
  );
}

export default Layout;
