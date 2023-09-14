import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import logo from "../images/LogoTextTransBlack.png";
import "../css/studentpage.css";
import Axel from "../images/Axel.jpg";
import Teo from "../images/Teo.jpg";
function StudentPage() {
  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div className="center-content">
          <h1>Student Projects</h1>
        </div>
        <Card
          color="rgba(0, 0, 0, 0)"
          textColor="black"
          width="60%"
          children={
            <div>
              <div className="student-grid-container-inner">
                <div style={{ gridColumn: "1 / span 2" }}>
                  <h1>Database Evaluation</h1>
                  <p>
                    Teodor and Axel studied systems science at LTU, Sweden, and
                    worked with us to evaluate and research different database
                    solutions. They looked at factors such as efficiency,
                    implementation difficulty, and cost for different stages in
                    a growing business.
                  </p>
                  <br />
                  <p>
                    They compared our current implementation with Firebase to a
                    regular MySQL solution and the project was carried out with
                    great success.
                  </p>
                </div>
                <div>
                  <div className="student-right">
                    <div>
                      <img
                        className="student-image-container rounded-image"
                        src={Teo}
                        alt=""
                      />
                      <h2 className="center-content">Teodor</h2>
                    </div>
                  </div>
                  <div className="student-left">
                    <div>
                      <h2 className="center-content">Axel</h2>
                      <img
                        className="student-image-container rounded-image"
                        src={Axel}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default StudentPage;
