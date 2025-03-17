import React from "react";
import "../css/homepage.css";
import { projectData, techStackIcons, frameworksIcons } from "../Constants"; // import constants
// import Spline from "@splinetool/react-spline";

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
          <img
            className="header-image-container"
            src={RootPiText}
            alt="RootPi Logo"
          />
        }
      />
      <main>
        <div className="home-grid-container-header">
          <div className="hidden">
            <img
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "5%", marginTop: "20px" }}
              src={VRDude}
              alt="VR Dude"
            />
            <img
              className="home-title-image-container rounded-image"
              style={{ marginLeft: "20%", marginTop: "50px" }}
              src={AI}
              alt="AI"
            />
          </div>
          <div>
            <div className="home-title">
              <h1>This is RootPi</h1>
            </div>
            <p style={{ marginTop: "60px", fontSize: "18px" }}>
              Welcome to RootPi, we provide fullstack and AI solutions for your
              needs. We are here to help you bring your ideas to life! Our small
              team of experienced developers will work with you to create a
              custom solution, tailored to your specific needs and goals.
            </p>
            <br />
            <p style={{ fontSize: "18px" }}>
              Do you have a project in mind or just want to know more about our
              business? Get in touch and let us help you bring your ideas to
              life!
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
              alt="Coder"
            />
          </div>
        </div>

        <div className="grid-container">
          <div className="home-title">
            <h1>Customers</h1>
          </div>
        </div>

        <div className="grid-container">
          {projectData.map((project, index) => (
            <Card key={index} textColor="black">
              <CardProject {...project} />
            </Card>
          ))}
        </div>

        <CardContact textColor="black">
          <div>
            <h1>Come in contact</h1>
            <p>
              Contact us and tell us about yourself, your company, or your
              ideas!
            </p>
            <br />
            <span style={{ fontWeight: "bold" }}>RootPi AB</span>
            <br />
            <span style={{ fontWeight: "bold" }}>Bantorget 2</span>
            <br />
            <span style={{ fontWeight: "bold" }}>222 29, Lund</span>
            <br />
            <br />
            <div className="flex items-center font-bold">
              <FiMail />
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
            <div className="flex items-center font-bold mt-2">
              <FiPhone />
              <a
                href="tel:+46708889536"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                +4673 088 95 56
              </a>
            </div>
          </div>
        </CardContact>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
