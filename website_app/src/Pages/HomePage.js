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
import {BsUnity} from 'react-icons/bs';
import {FaReact, FaPython} from 'react-icons/fa';


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
            <p>RootPi is a dynamic company that is at the forefront of cutting-edge technologies. The company specializes in developing immersive virtual reality applications using Unity, a popular game engine that has been adapted for VR applications. The team at RootPi is highly skilled in creating stunning and realistic virtual environments that can be used for a variety of applications, including gaming, training simulations, and more.</p>
            <br/>
            <p>In addition to their expertise in virtual reality development, RootPi also has a strong focus on mobile app development using Flutter, a cross-platform framework developed by Google. This allows them to create high-quality mobile apps that work seamlessly on both iOS and Android devices, providing clients with a wider reach and a greater potential audience.</p>
            <br/>
            <p>But RootPi doesn't just stop at development. They also offer comprehensive consulting services to help clients bring their ideas to life. Their team of experienced developers and consultants works closely with clients to understand their needs and goals, and then provides tailored solutions to help them achieve success. Whether it's developing a new app, optimizing an existing one, or providing strategic guidance, RootPi is committed to helping clients succeed.</p>
            <br/>
            <p>With a strong focus on innovation, RootPi is constantly exploring new technologies and techniques to provide the best possible solutions to their clients. Whether it's through virtual reality, mobile app development, or consulting services, RootPi is dedicated to delivering exceptional results and exceeding their clients' expectations.</p>
          </div>
          <div></div>
          <div>
            <img className='title-image-container rounded-image' style={{marginRight: "10%"}} src={VRDude} alt="" />
            <img className='title-image-container rounded-image' style={{marginLeft: "70%"}} src={VRDude} alt="" />
            <img className='title-image-container rounded-image' style={{marginLeft: "10%"}} src={VRDude} alt="" />
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
                  <FaPython style={{marginBottom: '10px', marginLeft: '10px'}} />
                  <p>A website for effortless generation of personalized cover letter, written for the work that you are applying to</p>
                </div>
                <img className='card-image-container rounded-image' src={Instapply} alt="" />
              </div>
            </div>
          } />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;