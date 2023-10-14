import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import PortfolioPage from "./Pages/PortfolioPage";
import StudentPage from "./Pages/StudentPage";
import AboutPage from "./Pages/AboutPage";
// import ContactPage from "./PagesOld/ContactPage";
import TraumaSimPrivacyPolicyPage from "./Pages/TraumaSimPrivacyPolicyPage";
import StreaksPrivacyPolicyPage from "./Pages/StreaksPrivacyPolicyPage";
import TimetrackerPrivacyPolicyPage from "./Pages/TimeTrackerPrivacyPolicyPage";

function MainRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/students" element={<StudentPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        {/* <Route exact path="/contact" element={<ContactPage />} /> */}
        <Route
          exact
          path="/traumasim-privacy-policy"
          element={<TraumaSimPrivacyPolicyPage />}
        />
        <Route
          exact
          path="/streaks-privacy-policy"
          element={<StreaksPrivacyPolicyPage />}
        />
        <Route
          exact
          path="/timetracker-privacy-policy"
          element={<TimetrackerPrivacyPolicyPage />}
        />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
