import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/studentpage.css';
import VRDude from '../images/VRDude.png';


function StudentPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='header-image-container' src={logo} alt="" />} />
      <main>
      <div className='center-content'>
        <h1>Current projects</h1>
      </div>
      <Card color="rgba(0, 0, 0, 0)" textColor="black" width="60%" children={
          <div>
            <div className='grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <h1>Database evaulation</h1>
                  <h3>Teo and Axel studying systems science at LTU, Sweden, are working with us to evaluate and research different database solutions. They are looking at factors such as: efficiency, difficulty of implementation and cost for different sizes of the business.  </h3>
                  <br />
                  <h3>They are comparing our implementation with Firebase to a regular MySQL implementation.</h3>
                </div>
                <div>
                  <img className='student-image-container profile-rounded-image' style={{marginLeft: "50%", marginRight: "20%"}} src={VRDude} alt="" />
                  <h2 style={{marginLeft: "65%", marginTop: '10px'}}>Teo</h2>
                  <h2 style={{marginLeft: "35%"}}>Axel</h2>
                  <img className='student-image-container profile-rounded-image' style={{marginLeft: "20%"}} src={VRDude} alt="" />
                </div>
              </div>
            <br/>
          </div>
        } />
        <div className='center-content'>
          <h1>Available projects</h1>
        </div>
        <Card color="rgba(0, 0, 0, 0)" textColor="black" width="60%" children={
          <div>
            <h1>Unity: Rope physics</h1>
            <h3>We are intrested of having a student to look into how to best implemnt physics of a rope using particle-based physics</h3>
            <br />
            <h3>If this is something you would find intresting do not hesitate to contact us!</h3>
          </div>
        } />
      </main>
      <Footer/>
    </div>
  );
}

export default StudentPage;