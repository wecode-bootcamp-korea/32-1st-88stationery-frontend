import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Goods from "./pages/Goods/Goods";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/goods" element={<Goods />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
