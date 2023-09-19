import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";

function NotFoundPage() {
  return (
    <div className="page">
      <Header />
      <main className="center-content">
        <h1>404 Not Found</h1>
      </main>
      <p className="center-content">
        Seems like the page you are looking for is in another castle!
      </p>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
