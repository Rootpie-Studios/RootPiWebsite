import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StoryTime from './Pages/StoryTime';
import NotFoundPage from './Pages/NotFoundPage';
import PortfolioPage from './Pages/PortfolioPage';
import StudentPage from './Pages/StudentPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';


function MainRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/storytime"  element={<StoryTime />} />
        <Route exact path="/"           element={<HomePage />} />
        <Route exact path="/portfolio"  element={<PortfolioPage />} />
        <Route exact path="/students"   element={<StudentPage />} />
        <Route exact path="/about"      element={<AboutPage />} />
        <Route exact path="/contact"    element={<ContactPage />} />
        <Route exact path="*"           element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default MainRouter