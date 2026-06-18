import React from "react";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "../i18n/LanguageContext";
import { POLICY_CONFIG, templatePolicy } from "../i18n/policies";
import "../css/privacy_policy.css";

function LekaosPrivacyPolicyPage() {
  const { lang } = useLanguage();
  const privacyPolicyMarkdown = templatePolicy({
    lang,
    ...POLICY_CONFIG.lekaos,
  });

  return (
    <div className="App">
      <main>
        <div>
          <div className="about-container markdown-content">
            <ReactMarkdown>{privacyPolicyMarkdown}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LekaosPrivacyPolicyPage;
