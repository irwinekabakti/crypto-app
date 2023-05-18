import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CryptoCurrencies from "../components/Cryptocurrencies/CryptoCurrencies";

const CryptoCurrenciesPage = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <CryptoCurrencies />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCurrenciesPage;
