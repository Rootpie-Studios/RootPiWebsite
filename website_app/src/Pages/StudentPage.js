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
          <h1>Student projects</h1>
        </div>
        <Card
          color="rgba(0, 0, 0, 0)"
          textColor="black"
          width="60%"
          children={
            <div>
              <div className="student-grid-container-inner">
                <div style={{ gridColumn: "1 / span 2" }}>
                  <h1>Database evaulation</h1>
                  <h3>
                    Teodor and Axel are studying systems science at LTU, Sweden,
                    and are working with us to evaluate and research different
                    database solutions. They are looking at factors such as
                    efficiency, implementation difficulty and cost for different
                    stages in a growing business.{" "}
                  </h3>
                  <br />
                  <h3>
                    They are comparing our implementation with Firebase to a
                    regular MySQL implementation.
                  </h3>
                </div>
                <div>
                  <div className="student-right">
                    <img
                      className="student-image-container profile-rounded-image"
                      src={Teo}
                      alt=""
                    />
                    <h2 style={{ marginLeft: "40px" }}>Teodor</h2>
                  </div>
                  <div className="student-left">
                    <h2 style={{ marginLeft: "50px" }}>Axel</h2>
                    <img
                      className="student-image-container profile-rounded-image"
                      src={Axel}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <br />
            </div>
          }
        />
        <div className="center-content">
          <h1>Available projects</h1>
        </div>
        <Card
          color="rgba(0, 0, 0, 0)"
          textColor="black"
          width="60%"
          children={
            <div>
              <h1>Unity: Rope physics</h1>
              <h3>
                We are interested in having a student look into how to best
                implement physics of a rope in a virtual 3D environment using
                particle-based physics simulations. This can be done as a
                bachelor or master thesis project
              </h3>
              <br />
              <h3>
                If this is something you would find intresting do not hesitate
                to contact us!
              </h3>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default StudentPage;
