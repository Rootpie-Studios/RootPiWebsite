// Import dependencies and components
import React from "react";
import "../css/studentpage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

// Import images
import logo from "../images/LogoTextTransBlack.png";
import axelImage from "../images/Axel.jpg";
import teoImage from "../images/Teo.jpg";

// StudentInfo functional component
const StudentInfo = ({ name, image }) => (
  <div className="student-info">
    <img className="student-image rounded-image" src={image} alt={name} />
    <h2>{name}</h2>
  </div>
);

// Main StudentPage functional component
const StudentPage = () => (
  <div className="App">
    <Header
      subtitle={
        <img className="header-image-container" src={logo} alt="Logo" />
      }
    />

    <main>
      <h1 className="center-content">Student Projects</h1>

      {/* Database Evaluation Project */}
      <Card color="white" textColor="black" width="80%">
        <div className="student-grid">
          <div className="student-description">
            <h1>Database Evaluation</h1>
            <p>
              Teodor and Axel studied systems science at LTU, Sweden, and worked
              with us to evaluate and research different database solutions.
            </p>
            <p>
              They compared our current implementation with Firebase to a
              regular MySQL solution and the project was carried out with great
              success.
            </p>
          </div>

          {/* Student Info Section */}
          <div className="student-image-section">
            <StudentInfo name="Teodor" image={teoImage} />
            <StudentInfo name="Axel" image={axelImage} />
          </div>
        </div>
      </Card>
    </main>

    <Footer />
  </div>
);

export default StudentPage;
