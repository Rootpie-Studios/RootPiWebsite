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
import TraumaSim from "../images/traumasim_logo.png";
// import ropes from "../images/RootPiRopesAssetIconHQ.png";
import sago_logo from "../images/sago_logo.png";
import Instapply from "../images/Instapply.png";
import Coder from "../images/Coder.png";
import AI from "../images/AI.png";

// icons
import { BsUnity } from "react-icons/bs";
import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaVuejs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiCsharp,
  SiBlender,
  SiJavascript,
  SiDart,
  SiPython,
  SiCss3,
  SiFlutter,
  SiLaravel,
  SiTailwindcss,
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
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "5%", marginTop: "20px" }}
              src={VRDude}
              alt=""
            />
            <img
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "20%", marginTop: "50px" }}
              src={AI}
              alt=""
            />
          </div>
          <div>
            <div className="home-title">
              <h1>This is us</h1>
            </div>
            <p style={{ marginTop: "60px", fontSize: "18px" }}>
              Welcome to RootPi, we provide solutions for Virtual Reality
              applications, mobile apps, and consulting services. Our small team
              of experienced developers will work with you to create a custom
              solution that is tailored to your specific needs and goals.
            </p>
            <br />
            <p>
              Do you have a project in mind or just want to know more about our
              business? Contact us and let us help you bring your ideas to life.
            </p>
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
              className="home-title-image-container rounded-image coder-image"
              src={Coder}
              alt=""
            />
          </div>
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h1>Current projects</h1>
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
                  TraumaSim VR
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
                      A VR education software for practicing realistic trauma
                      related scenarios in a medical environment. Built in
                      collaboration with Umeå University.
                    </p>
                    <br />
                    <a href="https://www.youtube.com/channel/UCSN4whSZMrjPGXJAuBy1p1g">
                      YouTube channel
                    </a>
                  </div>
                  <img
                    className="home-card-image-container rounded-image"
                    src={TraumaSim}
                    alt=""
                  />
                </div>
              </div>
            }
          />
          {/* <Card
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
                      found here:{" "}
                      <a href="https://www.youtube.com/watch?v=ZVZiVGy22QA">
                        RootPi Ropes video
                      </a>
                    </p>
                  </div>
                  <img
                    className="home-card-image-container rounded-image"
                    src={ropes}
                    alt=""
                  />
                </div>
              </div>
            }
          /> */}
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
                  sagostund.nu
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    {/* <IconWithTooltip
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
                    /> */}
                    <IconWithTooltip
                      tooltip="VueJS"
                      icon={<FaVuejs style={{ marginBottom: "10px" }} />}
                    />
                    <IconWithTooltip
                      tooltip="TailwindCSS"
                      icon={
                        <SiTailwindcss
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />
                    <IconWithTooltip
                      tooltip="Python"
                      icon={
                        <FaPython
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />
                    <p>
                      A website for generating magical, unique stories and fairy
                      tales for your children, your friends or yourself!
                    </p>
                    <br />
                    <a href="sagostund.nu">sagostund.nu</a>
                  </div>
                  <img
                    className="home-card-image-container rounded-image"
                    src={sago_logo}
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
                  ai-decoder.com
                </h2>
                <div className="home-grid-container-inner">
                  <div style={{ gridColumn: "1 / span 2" }}>
                    <IconWithTooltip
                      tooltip="VueJS"
                      icon={<FaVuejs style={{ marginBottom: "10px" }} />}
                    />
                    <IconWithTooltip
                      tooltip="TailwindCSS"
                      icon={
                        <SiTailwindcss
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />
                    <IconWithTooltip
                      tooltip="Python"
                      icon={
                        <FaPython
                          style={{ marginBottom: "10px", marginLeft: "10px" }}
                        />
                      }
                    />

                    <p>
                      A website for effortless AI generation of personalized
                      cover letter, tailored to both your own skills and for the
                      work you are applying to.
                    </p>
                    <br />
                    <a href="https://instapply.se">instapply.se</a>
                  </div>
                  <img
                    className="home-card-image-container rounded-image"
                    src={Instapply}
                    alt=""
                  />
                </div>
              </div>
            }
          />
          {/* <Card
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
                      A website for effortless AI generation of personalized
                      cover letter, tailored to both your own skills and for the
                      work you are applying to.
                    </p>
                    <br />
                    <a href="https://instapply.se">instapply.se</a>
                  </div>
                  <img
                    className="home-card-image-container rounded-image"
                    src={Instapply}
                    alt=""
                  />
                </div>
              </div>
            }
          /> */}
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h1>Our tech stack</h1>
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
              tooltip="JavaScript"
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
                  We have competence and years of experience in many coding
                  languages each with their own benefit to allow us to be
                  flexible and deliver products that meet any client
                  requirements
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
                  Frameworks and programs
                </h2>
                <p>
                  From 3D modelling and game engines to web- and app development
                  software, we are confident users of a variety of powerful
                  frameworks and programs and that allow us to get work done
                  faster at a high level
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
                    <a
                      href="mailto:info@rootpi.xyz"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      info@rootpi.xyz
                    </a>
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
