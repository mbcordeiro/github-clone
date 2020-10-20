import "react-calendar-heatmap/dist/styles.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username/:repo" element={<Repo />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>

      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
