import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Inquiry from "./pages/Inquiry/Inquiry";
import Category from "./pages/Category/Category";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
