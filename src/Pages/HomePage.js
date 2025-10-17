import React from "react";
import { projectData } from "../Constants";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import CardProject from "../Components/CardProject";
import CircularImage from "../Components/CircularImage";

import RootPiText from "../images/LogoTextTransBlack.png";
import VRDude from "../images/VRDude.webp";
import Coder from "../images/Coder.webp";
import AI from "../images/AI.webp";

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
      <main className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-4 md:mx-15 lg:mx-20 mb-8">
          <div className="hidden md:block">
            <CircularImage
              className="w-[70%] ml-[5%] mt-5"
              src={VRDude}
              alt="VR Dude"
            />
            <CircularImage
              className="w-[70%] ml-[30%] mt-12"
              src={AI}
              alt="AI"
            />
          </div>

          <div>
            <div className="mt-16 md:mt-24 mb-8">
              <h1 className="text-gray-700 text-4xl font-bold relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[60px] after:h-[3px] after:bg-accent">
                RootPi
              </h1>
            </div>
            <p className="mt-15 text-lg text-gray-600">
              We build fullstack applications and AI solutions. Our team of
              experienced developers delivers custom software that solves real
              problems.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Whether you have a project in mind or want to explore
              possibilities, let's talk about what we can build together.
            </p>
            <div className="flex justify-center items-center mt-8">
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
            <CircularImage
              className="w-[70%] ml-[20%] mt-12 md:mt-48"
              src={Coder}
              alt="Coder"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12 mb-8">
          <h1 className="text-gray-700 text-4xl font-bold relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[60px] after:h-[3px] after:bg-accent">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-11 px-6 md:px-9 lg:px-11 max-w-[1400px] mx-auto mb-16 w-full">
          {projectData.map((project, index) => (
            <CardProject
              key={index}
              textColor="black"
              width="100%"
              className="m-0 flex flex-col relative p-9 pb-24 rounded-2xl shadow-lg bg-white border border-gray-200"
              images={
                <div className="w-full flex justify-center items-center mb-2.5 p-0">
                  <CircularImage
                    className="w-40 h-40"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </div>
              }
              children={
                <div className="flex-1 flex flex-col">
                  <h2 className="text-2xl md:text-3xl mb-3 text-gray-700">
                    {project.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600 mb-8">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-block px-7 py-4 bg-gray-700 text-white rounded-lg no-underline font-medium absolute bottom-9 left-9 transition-all duration-200 hover:bg-gray-600 hover:-translate-y-0.5"
                    >
                      {project.linkText || "Learn More"}
                    </a>
                  )}
                </div>
              }
            />
          ))}
        </div>

        <div
          id="contact-section"
          className="bg-white rounded-2xl shadow-md p-6 md:p-8 mx-4 md:mx-auto mb-8 w-auto md:w-[70%] lg:w-[50%] max-w-[800px] border border-gray-200"
        >
          <h1 className="text-gray-700 text-3xl font-bold">Contact us</h1>
          <p className="text-gray-600 mt-4">
            Tell us about your project, your company, or your ideas!
          </p>
          <div className="mt-6 space-y-1">
            <span className="block font-bold text-gray-600">RootPi AB</span>
            <span className="block font-bold text-gray-600">Bantorget 2</span>
            <span className="block font-bold text-gray-600">222 29, Lund</span>
          </div>
          <div className="flex items-center font-bold mt-6">
            <FiMail className="text-gray-600" />
            <a
              href="mailto:info@rootpi.xyz"
              className="text-gray-600 no-underline ml-2.5 hover:text-gray-800"
            >
              info@rootpi.xyz
            </a>
          </div>
          <div className="flex items-center font-bold mt-2">
            <FiPhone className="text-gray-600" />
            <a
              href="tel:+46708889536"
              className="text-gray-600 no-underline ml-2.5 hover:text-gray-800"
            >
              +4673 088 95 56
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
