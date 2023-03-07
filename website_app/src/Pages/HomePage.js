import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Button from "../Components/Button";
import CardContact from "../Components/CardContact";
import logo from "../images/LogoTextTransBlack.png";
import "../css/homepage.css";

// images
import VRDude from "../images/VRDude.png";
import TraumaSim from "../images/TraumaSim.png";
import ropes from "../images/RootPiRopesAssetIconHQ.png";
import Instapply from "../images/Instapply.png";
import Coder from "../images/Coder.png";
import AI from "../images/AI.png";

// icons
import { BsUnity } from "react-icons/bs";
import { FaReact, FaPhp, FaHtml5, FaVuejs, FaJava } from "react-icons/fa";
import {
  SiCsharp,
  SiBlender,
  SiJavascript,
  SiDart,
  SiPython,
  SiCss3,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";
import ScrollButton from "../Components/ScrollButton";

function HomePage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main style={{ marginBottom: "30vw" }}>
        <div
          className="home-grid-container-header"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="hidden">
            <img
              className="home-title-image-container home-rounded-image"
              style={{ marginLeft: "20%" }}
              src={VRDude}
              alt=""
            />
            <img
              className="home-title-image-container home-rounded-image"
              style={{ marginLeft: "40%", marginTop: "600px" }}
              src={AI}
              alt=""
            />
          </div>
          <div>
            <div className="home-title">
              <h1>This is us</h1>
            </div>
            <h3 style={{ marginTop: "80px" }}>
              Welcome to RootPi, we provide solutions for Virtual Reality
              applications, mobile apps, and consulting services. Our small team
              of experienced developers will work with you to create a custom
              applicationtool that is tailored to your specific needs and goals.
            </h3>
            <br />
            <h3>
              Do you have a clear project you want to realize or just want to
              know more about us? Come in contact and let us help you bring your
              ideas to life.
            </h3>
            <Button
              textColor="white"
              label="Contact"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
            />
          </div>

          <div>
            <img
              className="home-title-image-container home-rounded-image"
              style={{ marginLeft: "20%", marginTop: "500px" }}
              src={Coder}
              alt=""
            />
          </div>
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h2>What we are working on right now</h2>
          </div>
        </div>

        <div className="grid-container">
          <Card
            color="rgba(0, 0, 0, 0)"
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Traumasim - VR application for medical students
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <BsUnity style={{ marginBottom: "10px" }} />
                    <SiBlender
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                    />
                    <SiCsharp
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                    />
                    <p>
                      We are working for Umeå university to build a virutal
                      reality trauma simulation for students to train on
                    </p>
                  </div>
                  <img
                    className="home-card-image-container home-rounded-image"
                    src={TraumaSim}
                    alt=""
                  />
                </div>
              </div>
            }
          />
          <Card
            color="rgba(0, 0, 0, 0)"
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Ropes - Unity asset store
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <BsUnity style={{ marginBottom: "10px" }} />
                    <SiCsharp
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                    />
                    <p>
                      We are developing and maintaining an asset for Unity which
                      simulates the physics of a rope. A short demo video can be
                      found at,{" "}
                      <a href="https://www.youtube.com/watch?v=ZVZiVGy22QA">
                        YouTube Video
                      </a>
                    </p>
                  </div>
                  <img
                    className="home-card-image-container home-rounded-image"
                    src={ropes}
                    alt=""
                  />
                </div>
              </div>
            }
          />
          <Card
            color="rgba(0, 0, 0, 0)"
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Instapply - AI generated cover letters
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <FaReact style={{ marginBottom: "10px" }} />
                    <SiPython
                      style={{ marginBottom: "10px", marginLeft: "10px" }}
                    />
                    <p>
                      A website for effortless generation of personalized cover
                      letter, written for the work that you are applying to.
                      Available on{" "}
                      <a href="https://instapply.se">instapply.se</a>
                    </p>
                  </div>
                  <img
                    className="home-card-image-container home-rounded-image"
                    src={Instapply}
                    alt=""
                  />
                </div>
              </div>
            }
          />
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h2>Our tech stack</h2>
          </div>
        </div>

        <div className="grid-container2">
          <h1>
            <SiCsharp style={{ marginBottom: "10px" }} />
            <SiPython style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <FaJava style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <FaPhp style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <FaHtml5 style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <SiJavascript
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            />
            <SiDart style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <SiCss3 style={{ marginBottom: "10px", marginLeft: "10px" }} />
          </h1>
          <h1>
            <SiBlender style={{ marginBottom: "10px" }} />
            <BsUnity style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <SiFlutter style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <SiLaravel style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <FaVuejs style={{ marginBottom: "10px", marginLeft: "10px" }} />
            <FaReact style={{ marginBottom: "10px", marginLeft: "10px" }} />
          </h1>
        </div>

        <div className="grid-container2">
          <Card
            color="rgba(0, 0, 0, 0)"
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Coding languages
                </h2>
                <p>
                  We are compentent in many coding languages each with their own
                  benefit to allow us to be flexible and deliver products that
                  meet the client requirements
                </p>
              </div>
            }
          />
          <Card
            color="rgba(0, 0, 0, 0)"
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Frameworks
                </h2>
                <p>
                  From our previous projects we have used many different
                  frameworks that allows us to get work done faster at a higher
                  level
                </p>
              </div>
            }
          />
        </div>
        <div>
          <CardContact
            textColor="black"
            children={<div>Hej</div>}
          ></CardContact>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// import {FaReact, FaPhp, FaHtml5, FaVuejs, FaJava} from 'react-icons/fa';
// import {SiCsharp, SiBlender, SiJavascript, SiDart, SiPython, SiCss3, SiFlutter, SiLaravel} from 'react-icons/si';

export default HomePage;
