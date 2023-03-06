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
import {FaReact, FaPhp, FaHtml5} from 'react-icons/fa';
import {SiCsharp, SiBlender, SiJavascript, SiDart, SiPython, SiCss3} from 'react-icons/si';


function HomePage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
        <div className='grid-container-header' style={{marginTop: '100px', marginBottom: '100px'}}>
          <div>
            <div className='title'>
              <h2>This is us</h2>
            </div>
            <p>Welcome to RootPi, the premier provider of cutting-edge virtual reality applications, mobile apps, and consulting services. At RootPi, we specialize in developing immersive and innovative virtual reality experiences that are sure to captivate and engage your audience. Our team of experienced developers and designers will work with you to create a custom virtual environment that is tailored to your specific needs and goals.</p>
            <br/>
            <p>We also offer mobile app development services using Flutter, a powerful cross-platform framework developed by Google. Our talented team of developers can create high-quality, user-friendly mobile apps that work seamlessly on both iOS and Android devices, helping you reach a wider audience and achieve greater success.</p>
            <br/>
            <p>But at RootPi, we don't just stop at development. Our comprehensive consulting services are designed to help you bring your ideas to life and achieve your goals. Our experienced consultants will work closely with you to understand your needs and provide tailored solutions that meet your unique requirements.</p>
            <br/>
            <p>At RootPi, we are committed to providing exceptional service and exceeding our clients' expectations. Our team of experts is constantly exploring new technologies and techniques to ensure that we are always at the forefront of innovation. Whether you're looking to create an immersive virtual reality experience or a user-friendly mobile app, RootPi has the expertise and experience to deliver exceptional results.</p>
            <br/>
            <p>So why wait? Contact RootPi today and let us help you bring your ideas to life.</p>
          </div>
          <div></div>
          <div>
            <img className='title-image-container rounded-image' style={{marginRight: "10%"}} src={Coder} alt="" />
            <img className='title-image-container rounded-image' style={{marginLeft: "70%"}} src={VRDude} alt="" />
            <img className='title-image-container rounded-image' style={{marginLeft: "10%"}} src={AI} alt="" />
          </div>
        </div>

        <div class="grid-container">
          <div className='title'>
            <h2>What we are working on right now</h2>
          </div>
        </div>

        <div class="grid-container">
          <Card textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Traumasim - VR application for medical students</h2>
              <div className='grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <BsUnity style={{marginBottom: '10px'}} />
                  <SiBlender style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <SiCsharp style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>We are working for Umeå university to build a virutal reality trauma simulation for students to train on</p>
                </div>
                <img className='card-image-container rounded-image' src={TraumaSim} alt="" />
              </div>
            </div>
          } />
          <Card textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Ropes - Unity asset store</h2>
              <div className='grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <BsUnity style={{marginBottom: '10px'}} />
                  <SiCsharp style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>We are developing and maintaining an asset for Unity which simulates the physics of a rope</p>
                </div>
                <img className='card-image-container rounded-image' src={ropes} alt="" />
              </div>
            </div>
          } />
          <Card textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Instapply - AI generated cover letters</h2>
              <div className='grid-container-inner'>
                <div style={{gridColumn: '1 / span 2'}}>
                  <FaReact style={{marginBottom: '10px'}} />
                  <SiPython style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>A website for effortless generation of personalized cover letter, written for the work that you are applying to</p>
                </div>
                <img className='card-image-container rounded-image' src={Instapply} alt="" />
              </div>
            </div>
          } />
        </div>

        <div class="grid-container">
          <div className='title'>
            <h2>Our tech stack</h2>
          </div>
        </div>

        <div class="grid-container2">
          <Card textColor="black" children={
            <div>
              <h2 style={{marginBottom: '10px', overflow: 'visible', whiteSpace: 'nowrap'}}>Coding languages</h2>
              <h1>
                <SiCsharp style={{marginBottom: '10px'}} />
                <SiPython style={{marginBottom: '10px', marginLeft: '10px'}} />
                <FaPhp style={{marginBottom: '10px', marginLeft: '10px'}} />
                <FaHtml5 style={{marginBottom: '10px', marginLeft: '10px'}} />
                <SiJavascript style={{marginBottom: '10px', marginLeft: '10px'}} />
                <SiDart style={{marginBottom: '10px', marginLeft: '10px'}} />
                <SiCss3 style={{marginBottom: '10px', marginLeft: '10px'}} />
              </h1>
              <p>We are compentent in many coding languages each with their own benefit to allow us to be flexible and deliver products that meet the client requirements</p>
            </div>
          } />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

// import {FaReact, FaPhp, FaHtml5} from 'react-icons/fa';
// import {SiCsharp, SiBlender, SiJavascript, SiDart, SiPython, SiCss3} from 'react-icons/si';

export default HomePage;