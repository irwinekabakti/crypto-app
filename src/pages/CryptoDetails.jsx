import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CryptoDetails from "../components/CryptoDetails/CryptoDetails";

const CryptoDetailsPage = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <CryptoDetails />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetailsPage;
