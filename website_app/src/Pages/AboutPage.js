import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/aboutpage.css";
import Kim from "../images/Kim.png";
import Jesper from "../images/Jesper.jpg";

function AboutPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <h1 className="center-content">Our team</h1>
        <div className="grid-container2">
          <div className="about-container">
            <img
              className="about-image-container about-rounded-image"
              src={Kim}
              alt=""
            />
            <h2 style={{ marginTop: "100px" }}>Kim Haapamäki</h2>
            <p>
              M.Sc. Computer Science Engineering, LTH, Sweden. A passion for
              game development and Machine Learning. Developing Unity games,
              consulting expertise in VR/ML, mobile and web app development!
              Co-founder of RootPi AB.
            </p>
          </div>
          <div className="about-container">
            <img
              className="about-image-container about-rounded-image"
              src={Jesper}
              alt=""
            />
            <h2 style={{ marginTop: "100px" }}>Jesper Laurell</h2>
            <p>
              M.Sc. Electrical Engineering, LTH, Sweden. Unity developer.
              Interested in VR, games, 3D modelling and animation, quantified
              self and tracking, Python, blockchain, app development, UX and
              design. Co-founder of RootPi AB.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
