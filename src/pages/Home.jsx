import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Homepage from "../components/Homepage/Homepage";

const Home = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Homepage />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
