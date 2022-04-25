import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Bucket from "./pages/Bucket/Bucket";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/bucket" element={<Bucket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
