import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import { useLanguage } from "../i18n/LanguageContext";
import { traumaSimPolicy } from "../i18n/policies";
import "../css/privacy_policy.css";

function TraumaSimPrivacyPolicyPage() {
  const { lang } = useLanguage();
  const privacyPolicyMarkdown = traumaSimPolicy(lang);

  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div>
          <div className="about-container markdown-content">
            <ReactMarkdown>{privacyPolicyMarkdown}</ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TraumaSimPrivacyPolicyPage;
