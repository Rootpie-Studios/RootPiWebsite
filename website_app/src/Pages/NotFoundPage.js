import '../App.css';
import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';

function NotFoundPage() {
  return (
    <div className='page'>
      <Header/>
      <main>
        <p>Oh no! the page you were looking seems to have run away!</p>
      </main>
      <Footer/>
    </div>
  );
}


export default NotFoundPage;
