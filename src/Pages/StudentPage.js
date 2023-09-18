import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import logo from "../images/LogoTextTransBlack.png";
import Axel from "../images/Axel.jpg";
import Teo from "../images/Teo.jpg";
import "../css/studentpage.css";

const StudentInfo = ({ name, image }) => (
  <div className="student-info">
    <img className="student-image rounded-image" src={image} alt={name} />
    <h2>{name}</h2>
  </div>
);

function StudentPage() {
  return (
    <div className="App">
      <Header
        subtitle={
          <img className="header-image-container" src={logo} alt="Logo" />
        }
      />
      <main>
        <h1 className="center-content">Student Projects</h1>
        <Card color="transparent" textColor="black" width="80%">
          <div className="student-grid">
            <div className="student-description">
              <h1>Database Evaluation</h1>
              <p>
                Teodor and Axel studied systems science at LTU, Sweden, and
                worked with us to evaluate and research different database
                solutions.
              </p>
              <br />
              <p>
                They compared our current implementation with Firebase to a
                regular MySQL solution and the project was carried out with
                great success.
              </p>
            </div>
            <div className="student-image-section">
              <StudentInfo name="Teodor" image={Teo} />
              <StudentInfo name="Axel" image={Axel} />
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default StudentPage;
