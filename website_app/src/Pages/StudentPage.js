import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import logo from '../images/LogoTextTransBlack.png';
import '../css/studentpage.css';


function StudentPage() {
  return (
    <div className='App'>
      <Header subtitle={<img className='image-container' src={logo} alt="" />} />
      <main>
      <Card color="#696969" textColor="white" width="60%" children={
          <div>
            <h2>Database evaulation</h2>
            <p>Teo and Axel studying systems science at LTU, Sweden, are working with us to evaluate and research different database solutions. They are looking at factors such as: efficiency, difficulty of implementation and cost for different sizes of the business.  </p>
            <br/>
          </div>
        } />
      </main>
      <Footer/>
    </div>
  );
}

export default StudentPage;