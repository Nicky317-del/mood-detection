import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Chat from "./pages/Chat";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
        <Route path="/chat" element={<Layout><Chat /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;