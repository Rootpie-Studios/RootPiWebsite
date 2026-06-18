import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useT } from "../i18n/LanguageContext";
import "../App.css";

function NotFoundPage() {
  const t = useT();
  return (
    <div className="page">
      <Header />
      <main className="center-content">
        <h1>{t("notFound.title")}</h1>
      </main>
      <p className="center-content">{t("notFound.body")}</p>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
