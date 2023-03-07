import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/homepage.css';
import ropes from '../images/RootPiRopesAssetIconHQ.png';
import VRDude from '../images/VRDude.png';
import TraumaSim from '../images/TraumaSim.png';
import Instapply from '../images/Instapply.png';
import Coder from '../images/Coder.png';
import AI from '../images/AI.png';
import {BsUnity} from 'react-icons/bs';
import {FaReact, FaPhp, FaHtml5, FaVuejs, FaJava} from 'react-icons/fa';
import {SiCsharp, SiBlender, SiJavascript, SiDart, SiPython, SiCss3, SiFlutter, SiLaravel} from 'react-icons/si';


function HomePage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='header-image-container' src={logo} alt="" />} />
      <main style={{marginBottom: "30vw"}}>
        <div className='home-grid-container-header' style={{marginTop: '100px', marginBottom: '100px'}}>
          <div className='hidden'>
            <img className='home-title-image-container home-rounded-image' style={{marginLeft: "20%"}} src={VRDude} alt="" />
            <img className='home-title-image-container home-rounded-image' style={{marginLeft: "40%", marginTop: "600px"}} src={AI} alt="" />
          </div>
          <div>
          <div className='home-title'>
            <h1>This is us</h1>
            </div>
            <h3 style={{marginTop: "80px"}}>Welcome to RootPi, we provide of solutions for Virtual Reality applications, mobile apps, AI implementations and consulting services. Our small team of experienced developers will work with you to create a custom solution tailored for your specific needs and goals.</h3>
            <br/>
            <h3>Do you have an idea you want to realize or just want to talk? Come in contact us today and let us help you bring your visions to life.</h3>
          </div>
          <div>
            <img className='home-title-image-container home-rounded-image' style={{marginLeft: "20%", marginTop: "500px"}} src={Coder} alt="" />
          </div>
        </div>

        <div class="grid-container">
          <div className='home-title'>
            <h2>What we are working on right now</h2>
          </div>
        </div>

        <div class="grid-container">
          <Card color='rgba(0, 0, 0, 0)' textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Traumasim - VR application for medical students</h2>
              <div className='home-grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <BsUnity style={{marginBottom: '10px'}} />
                  <SiBlender style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <SiCsharp style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>We are working for Umeå university to build a virutal reality trauma simulation for students to train on</p>
                </div>
                <img className='home-card-image-container home-rounded-image' src={TraumaSim} alt="" />
              </div>
            </div>
          } />
          <Card color='rgba(0, 0, 0, 0)' textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Ropes - Unity asset store</h2>
              <div className='home-grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <BsUnity style={{marginBottom: '10px'}} />
                  <SiCsharp style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>We are developing and maintaining an asset for Unity which simulates the physics of a rope</p>
                </div>
                <img className='home-card-image-container home-rounded-image' src={ropes} alt="" />
              </div>
            </div>
          } />
          <Card color='rgba(0, 0, 0, 0)' textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Instapply - AI generated cover letters</h2>
              <div className='home-grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <FaReact style={{marginBottom: '10px'}} />
                  <SiPython style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>A website for effortless generation of personalized cover letter, written for the work that you are applying to. Available on <a href="https://instapply.se">instapply.se</a></p>
                </div>
                <img className='home-card-image-container home-rounded-image' src={Instapply} alt="" />
              </div>
            </div>
          } />
        </div>

        <div class="grid-container">
          <div className='home-title'>
            <h2>Our tech stack</h2>
          </div>
        </div>

        <div class="grid-container2">
          <h1>
            <SiCsharp style={{marginBottom: '10px'}} />
            <SiPython style={{marginBottom: '10px', marginLeft: '10px'}} />
            <FaJava style={{marginBottom: '10px', marginLeft: '10px'}} />
            <FaPhp style={{marginBottom: '10px', marginLeft: '10px'}} />
            <FaHtml5 style={{marginBottom: '10px', marginLeft: '10px'}} />
            <SiJavascript style={{marginBottom: '10px', marginLeft: '10px'}} />
            <SiDart style={{marginBottom: '10px', marginLeft: '10px'}} />
            <SiCss3 style={{marginBottom: '10px', marginLeft: '10px'}} />
          </h1>
          <h1>
            <SiBlender style={{marginBottom: '10px'}} />
            <BsUnity style={{marginBottom: '10px', marginLeft: '10px'}} />
            <SiFlutter style={{marginBottom: '10px', marginLeft: '10px'}} />
            <SiLaravel style={{marginBottom: '10px', marginLeft: '10px'}} />
            <FaVuejs style={{marginBottom: '10px', marginLeft: '10px'}} />
            <FaReact style={{marginBottom: '10px', marginLeft: '10px'}} />
          </h1>
        </div>

        <div class="grid-container2">
          <Card color='rgba(0, 0, 0, 0)' textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Coding languages</h2>
              <p>We are compentent in many coding languages each with their own benefit to allow us to be flexible and deliver products that meet the client requirements</p>
            </div>
          } />
          <Card color='rgba(0, 0, 0, 0)' textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Frameworks</h2>
              <p>From our previous projects we have used many different frameworks that allows us to get work done faster at a higher level</p>
            </div>
          } />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

// import {FaReact, FaPhp, FaHtml5, FaVuejs, FaJava} from 'react-icons/fa';
// import {SiCsharp, SiBlender, SiJavascript, SiDart, SiPython, SiCss3, SiFlutter, SiLaravel} from 'react-icons/si';

export default HomePage;