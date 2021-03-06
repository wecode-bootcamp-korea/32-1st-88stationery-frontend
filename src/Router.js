import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Goods from "./pages/Goods/Goods";
import Inquiry from "./pages/Inquiry/Inquiry";
import Category from "./pages/Category/Category";
import Mypage from "./pages/Mypage/Mypage";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/goods/:id" element={<Goods />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
