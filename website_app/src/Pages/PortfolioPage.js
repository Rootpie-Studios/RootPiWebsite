import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/portfoliopage.css';


function PortfolioPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
        
    
        <Card textColor="black" width="60%" children={
          <div>
            <h2>TraumaSim VR</h2>
            <p>A VR-simulation for education of hospital personnel and students. In collaboration with Umeå university we are developing a VR simulation for enabling training of otherwise expensive and cumbersome parts of the education that are essential for being a successful professional in the medical industry. The application is developed in Unity with C# and is currently being built. The work involves close contact with medical professionials from Umeå, 3D-modelling in Blender, VR-programming and testing. </p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>instapply.se, AI cover letters</h2>
            <p>With the use of the recent advances in NLP in AI we have built a platform for generating a personal cover letter based on inputting only your CV and information about the job, such as the job ad itself. 
            </p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>Image analysis on datamatrix-test tubes for Treat4Life</h2>
            <p> </p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>RootPi Ropes</h2>
            <p> </p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>TimeTracker</h2>
            <p></p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>ML-classification GvHD with MicroRNA</h2>
            <p></p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>Crystal Quest 1 and 2</h2>
            <p></p>
            <br/>
          </div>
        } />
        <Card textColor="black" width="60%" children={
          <div>
            <h2>Deep reinforcement learning in Halite IV; a multi-agent competitive environment</h2>
            <p></p>
            <br/>
          </div>
        } />
      </main>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;