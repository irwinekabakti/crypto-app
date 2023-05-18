import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

const NewsPage = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <News />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
