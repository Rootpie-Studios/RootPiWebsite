import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StoryTime from "./Pages/StoryTime";
import NotFoundPage from "./Pages/NotFoundPage";
import PortfolioPage from "./Pages/PortfolioPage";
import StudentPage from "./Pages/StudentPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SaganOmBinlo from "./Pages/SaganOmBinlo";
import AlfredsSaga from "./Pages/AlfredsSaga";
import SagorPage from "./Pages/SagorPage";
import GenerateStoryPage from "./Pages/GenerateStoryPage";

function MainRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/sagor-for-barn" element={<StoryTime />} />
        <Route exact path="/sagor" element={<SagorPage />} />
        <Route exact path="/skapa-din-egen-saga" element={<GenerateStoryPage />} />
        <Route exact path="/sagan-om-binlo" element={<SaganOmBinlo />} />
        <Route exact path="/sagan-om-alfred" element={<AlfredsSaga />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/students" element={<StudentPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
