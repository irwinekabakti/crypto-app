import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ExchangesPage from "../pages/Exchanges";
import CryptoCurrenciesPage from "../pages/CryptoCurrencies";
import CryptoDetailsPage from "../pages/CryptoDetails";
import NewsPage from "../pages/News";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/exchanges", element: <ExchangesPage /> },
  { path: "/cryptocurrencies", element: <CryptoCurrenciesPage /> },
  { path: "/crypto/:coinId", element: <CryptoDetailsPage /> },
  { path: "/news", element: <NewsPage /> },
]);

export default router;
