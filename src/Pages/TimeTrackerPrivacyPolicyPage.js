import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import { useLanguage } from "../i18n/LanguageContext";
import { POLICY_CONFIG, templatePolicy } from "../i18n/policies";
import "../css/privacy_policy.css";

function TimetrackerPrivacyPolicyPage() {
  const { lang } = useLanguage();
  const privacyPolicyMarkdown = templatePolicy({
    lang,
    ...POLICY_CONFIG.timeTracker,
  });

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

export default TimetrackerPrivacyPolicyPage;
