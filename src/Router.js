import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Bucket from "./pages/bucket/bucket";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/bucket" element={<Bucket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
