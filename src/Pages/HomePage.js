import React from "react";
import "../css/homepage.css";
import { projectData, techStackIcons, frameworksIcons } from "../Constants"; // import constants

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Button from "../Components/Button";
import CardContact from "../Components/CardContact";
import CardProject from "../Components/CardProject";
import IconArray from "../Components/IconArray";

// images
import RootPiText from "../images/LogoTextTransBlack.png";
import VRDude from "../images/VRDude.png";
import Coder from "../images/Coder.png";
import AI from "../images/AI.png";

import { FiMail, FiPhone } from "react-icons/fi";

function HomePage() {
  return (
    <div className="App">
      <Header
        subtitle={
          <img className="header-image-container" src={RootPiText} alt="" />
        }
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
              applications, mobile apps and websites, and consulting services.
              Our small team of experienced developers will work with you to
              create a custom solution that is tailored to your specific needs
              and goals.
            </p>
            <br />
            <p style={{ fontSize: "18px" }}>
              {" "}
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
          {projectData.map((project, index) => (
            <Card key={index} textColor="black">
              <CardProject {...project} />
            </Card>
          ))}
        </div>

        <div className="grid-container">
          <h1>Our tech stack</h1>
        </div>

        <div className="grid-container2">
          <Card
            textColor="black"
            children={
              <div>
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
                    flexible and deliver products that meet your needs.
                  </p>
                </div>
                <div className="">
                  <IconArray icons={techStackIcons} />
                </div>
              </div>
            }
          />

          <Card
            textColor="black"
            children={
              <div>
                <h2
                  style={{
                    overflow: "visible",
                    whiteSpace: "nowrap",
                  }}
                >
                  Frameworks and programs
                </h2>
                <p>
                  We work with high level frameworks and programs to deliver at
                  a high speed and efficiency. From 3D modelling and game
                  engines to web- and app development software, we utilize state
                  of the art technologies to create the best possible products.
                </p>
                <div className="">
                  <IconArray icons={frameworksIcons} />
                </div>
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
                <span style={{ fontWeight: "bold" }}>RootPi AB</span>
                <br />
                <span style={{ fontWeight: "bold" }}>Stralsundsvägen 96</span>
                <br />
                <span style={{ fontWeight: "bold" }}>224 79, Lund</span>
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <FiMail style={{}} />
                  <a
                    href="mailto:info@rootpi.xyz"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                  >
                    info@rootpi.xyz
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <FiPhone style={{}} />
                  <a
                    href="tel:+46708889536"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginLeft: "10px",
                    }}
                  >
                    +46 70 888 95 36
                  </a>
                  <br />
                  <br />
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
