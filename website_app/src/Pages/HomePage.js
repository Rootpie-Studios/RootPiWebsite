import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/homepage.css';
import ropes from '../images/RootPiRopesAssetIconHQ.png';
import VRDude from '../images/VRDude.png';
import TraumaSim from '../images/TraumaSim.png';


function HomePage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
        <div className='grid-container'>
          <div>
            <div className='title'>
              <h2>This is us</h2>
            </div>
            <p>RootPi is a dynamic company that specializes in developing virtual reality applications in Unity, creating mobile apps in Flutter, and providing comprehensive consulting services to help clients bring their ideas to life. </p>
            <br/>
            <p>With a team of experienced developers and consultants, RootPi is committed to providing innovative solutions that meet the unique needs and goals of its clients.</p>
          </div>
          <div></div>
          <div>
            <img className='card-image-container rounded-image' src={VRDude} alt="" />
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
              <h2>Traumasim - VR application for medical students</h2>
              <div className='grid-container'>
                <div>
                </div>
                <div>
                </div>
                <img className='card-image-container rounded-image' src={TraumaSim} alt="" />
              </div>
            </div>
          } />
          <Card textColor="black" children={
            <div>
              <h2>Ropes - Unity asset store</h2>
              <div className='grid-container'>
                <div>
                </div>
                <div>
                </div>
                <img className='card-image-container rounded-image' src={ropes} alt="" />
              </div>
            </div>
          } />
          <Card textColor="black" children={
            <div>
              <h2>Instapply - AI generated cover letters</h2>
            </div>
          } />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default HomePage;