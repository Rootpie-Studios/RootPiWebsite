import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import logo from "../images/LogoTextTransBlack.png";
import "../css/homepage.css";
import IconWithTooltip from "../Components/IconWithTooltip";
import Button from "../Components/Button";
import CardContact from "../Components/CardContact";

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

function HomePage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main style={{ marginBottom: "10vw" }}>
        <div className="home-grid-container-header">
          <div className="hidden">
            <img
              className="home-title-image-container home-rounded-image"
              style={{ marginLeft: "20%" }}
              src={VRDude}
              alt=""
            />
            <img
              className="home-title-image-container home-rounded-image"
              style={{ marginLeft: "40%", marginTop: "50px" }}
              src={AI}
              alt=""
            />
          </div>
          <div>
            <div className="home-title">
              <h1>This is us</h1>
            </div>
            <h3 style={{ marginTop: "60px" }}>
              Welcome to RootPi, we provide solutions for Virtual Reality
              applications, mobile apps, and consulting services. Our small team
              of experienced developers will work with you to create a custom
              solution that is tailored to your specific needs and goals.
            </h3>
            <br />
            <h3>
              Do you have a project in mind or just want to know more about us?
              Come in contact and let us help you bring your ideas to life.
            </h3>
            <br />
            <div className="center-content">
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
          </div>

          <div>
            <img
              className="home-title-image-container home-rounded-image coder-image"
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
                  className="text"
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                  }}
                >
                  Traumasim - VR application for medical students
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <IconWithTooltip
                      tooltip="Unity"
                      icon={<BsUnity style={{ marginBottom: "10px" }} />}
                    />
                    <IconWithTooltip
                      tooltip="Blender"
                      icon={
                        <SiBlender
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />
                    <IconWithTooltip
                      tooltip="C#"
                      icon={
                        <SiCsharp
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />
                    <p className="text">
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
                  className="text"
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                  }}
                >
                  Ropes - Unity asset store
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <IconWithTooltip
                      tooltip="Unity"
                      icon={<BsUnity style={{ marginBottom: "10px" }} />}
                    />
                    <IconWithTooltip
                      tooltip="C#"
                      icon={
                        <SiCsharp
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
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
                  className="text"
                  style={{
                    marginBottom: "10px",
                    overflow: "visible",
                  }}
                >
                  Instapply - AI generated cover letters
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <IconWithTooltip
                      tooltip="React"
                      icon={<FaReact style={{ marginBottom: "10px" }} />}
                    />
                    <IconWithTooltip
                      tooltip="Python"
                      icon={
                        <SiPython
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
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
            <IconWithTooltip
              tooltip="C#"
              icon={<SiCsharp style={{ marginBottom: "10px" }} />}
            />
            <IconWithTooltip
              tooltip="Python"
              icon={
                <SiPython
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                />
              }
            />
            <IconWithTooltip
              tooltip="Java"
              icon={
                <FaJava style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="PHP"
              icon={
                <FaPhp style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="Html5"
              icon={
                <FaHtml5 style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="Java"
              icon={
                <SiJavascript
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                />
              }
            />
            <IconWithTooltip
              tooltip="Dart"
              icon={
                <SiDart style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="Css3"
              icon={
                <SiCss3 style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
          </h1>
          <h1>
            <IconWithTooltip
              tooltip="Blender"
              icon={<SiBlender style={{ marginBottom: "10px" }} />}
            />
            <IconWithTooltip
              tooltip="Unity"
              icon={
                <BsUnity style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="Flutter"
              icon={
                <SiFlutter
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                />
              }
            />
            <IconWithTooltip
              tooltip="Laravel"
              icon={
                <SiLaravel
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                />
              }
            />
            <IconWithTooltip
              tooltip="VueJS"
              icon={
                <FaVuejs style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
            <IconWithTooltip
              tooltip="React"
              icon={
                <FaReact style={{ marginBottom: "10px", marginLeft: "10px" }} />
              }
            />
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
            children={
              <div>
                <h1>Come in contact</h1>
                <p>
                  Contact us and tell us about yourself, your company or your
                  ideas!
                </p>
                <br />
                <span style={{ fontWeight: "bold" }}>
                  RootPi AB, Stralsundsvägen 96
                </span>
                <br />
                <span style={{ fontWeight: "bold" }}>224 79, Lund</span>
                <br />
                <br />
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    {/* <FiMail style={{ marginTop: "5px" }} /> */}
                    info@rootpi.xyz
                  </span>
                </div>
              </div>
            }
          ></CardContact>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
