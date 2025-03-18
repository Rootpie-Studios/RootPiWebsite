import React from "react";
import "../css/homepage.css";
import { projectData, techStackIcons, frameworksIcons } from "../Constants"; // import constants
// import Spline from "@splinetool/react-spline";

// Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
              <h1>RootPi</h1>
            </div>
            <p
              style={{ marginTop: "60px", fontSize: "18px", color: "#4a5568" }}
            >
              Welcome to RootPi, we provide fullstack and AI solutions for your
              needs. We are here to help you bring your ideas to life! Our small
              team of experienced developers will work with you to create a
              custom solution, tailored to your specific needs and goals.
            </p>
            <br />
            <p style={{ fontSize: "18px", color: "#4a5568" }}>
              Do you have a project in mind or just want to know more about our
              business? Get in touch and let us help you bring your ideas to
              life!
            </p>
            <br />
            <div className="center-content">
              <Button
                textColor="white"
                label="Contact"
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact-section");
                  if (contactSection) {
                    const yOffset = -20;
                    const y =
                      contactSection.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }}
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

        <div className="projects-grid-container homepage-projects">
          {projectData.map((project, index) => (
            <CardProject
              key={index}
              textColor="black"
              width="100%"
              images={
                <img
                  className="rounded-image"
                  src={project.imgSrc}
                  alt={project.title}
                />
              }
              children={
                <div>
                  <h2 className="text">{project.title}</h2>
                  <p className="text">{project.description}</p>
                  <div className="tech-icons">
                    {project.icons &&
                      project.icons.map((icon, idx) => (
                        <span key={idx} title={icon.tooltip}>
                          {icon.icon}
                        </span>
                      ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="card-button">
                      {project.linkText || "Learn More"}
                    </a>
                  )}
                </div>
              }
            />
          ))}
        </div>

        <CardContact textColor="black" id="contact-section">
          <div>
            <h1 style={{ color: "#2d3748" }}>Contact us</h1>
            <p style={{ color: "#4a5568" }}>
              Tell us about your project, your company, or your ideas!
            </p>
            <br />
            <span style={{ fontWeight: "bold", color: "#4a5568" }}>
              RootPi AB
            </span>
            <br />
            <span style={{ fontWeight: "bold", color: "#4a5568" }}>
              Bantorget 2
            </span>
            <br />
            <span style={{ fontWeight: "bold", color: "#4a5568" }}>
              222 29, Lund
            </span>
            <br />
            <br />
            <div className="flex items-center font-bold">
              <FiMail />
              <a
                href="mailto:info@rootpi.xyz"
                style={{
                  color: "#4a5568",
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
                  color: "#4a5568",
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
