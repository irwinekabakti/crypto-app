import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Exchanges from "../components/Exchanges/Exchanges";

const ExchangesPage = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Exchanges />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangesPage;
