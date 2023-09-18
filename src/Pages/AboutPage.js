import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/aboutpage.css";
import Kim from "../images/Kim.png";
import Jesper from "../images/jespernorge3.png";

function AboutPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <h1 className="center-content">About us</h1>
        <div className="grid-container2">
          <div className="about-container">
            <img
              className="about-image-container rounded-image"
              src={Kim}
              alt=""
            />
            <div className="card">
              <h2>Kim Haapamäki</h2>
              <p>
                M.Sc. Computer Science Engineering, LTH, Sweden. A passion for
                game development and Machine Learning. Developing Unity games,
                consulting expertise in VR/ML, mobile and web app development.
              </p>
            </div>
          </div>
          <div className="about-container">
            <img
              className="about-image-container rounded-image"
              src={Jesper}
              alt=""
            />
            <div className="card">
              <h2>Jesper Laurell</h2>
              <p>
                M.Sc. Electrical Engineering, LTH, Sweden. Interested in VR,
                game development and design, Unity, Generative AI, Python, image
                analysis, UI, and UX.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
