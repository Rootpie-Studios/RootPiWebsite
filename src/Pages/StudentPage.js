import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CircularImage from "../Components/CircularImage";

import logo from "../images/LogoTextTransBlack.png";
import axelImage from "../images/Axel.jpg";
import teoImage from "../images/Teo.jpg";

const StudentPage = () => (
  <div className="App">
    <Header
      subtitle={
        <img className="header-image-container" src={logo} alt="Logo" />
      }
    />

    <main className="w-full">
      <div className="flex justify-center">
        <h1 className="section-title">Student Projects</h1>
      </div>

      <div className="max-w-[900px] mx-auto px-4">
        <div className="bg-surface rounded-2xl border border-outline p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4 text-center font-display">
            Database Evaluation
          </h2>
          <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-12 text-center">
            Teodor and Axel studied systems science at LTU, Sweden, and worked
            with us to evaluate and research different database solutions. They
            compared our current implementation with Firebase to a regular MySQL
            solution and the project was carried out with great success.
          </p>

          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-[500px] mx-auto">
            <div className="flex flex-col items-center">
              <CircularImage
                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover mb-4"
                src={teoImage}
                alt="Teodor"
                shadowSize="md"
              />
              <h3 className="text-lg md:text-xl font-semibold text-ink">
                Teodor
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <CircularImage
                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-cover mb-4"
                src={axelImage}
                alt="Axel"
                shadowSize="md"
              />
              <h3 className="text-lg md:text-xl font-semibold text-ink">
                Axel
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default StudentPage;
