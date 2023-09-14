import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/privacy_policy.css";

function TraumaSimPrivacyPolicyPage() {
  const privacyPolicyMarkdown = `
# Privacy Policy for TraumaSim VR

## Effective Date: [Insert Date]

### Introduction
Welcome to TraumaSim VR. This privacy policy aims to inform you about the data we collect, why we collect it, and how we use it.

### Information We Collect

1. **Username**: To uniquely identify you within our system.
2. **Time of Completion for a Scenario**: To track your performance and learning curve.
3. **Score for a Scenario**: To assess your performance in training exercises.

### Why We Collect Data

- To provide a personalized training experience.
- To generate statistical reports for improving the app.
- To identify areas for educational improvement.

### How We Use Data

- **Personalization**: Your username helps us provide a personalized experience.
- **Performance Metrics**: Time of completion and score are used to gauge your training efficacy.
- **Improvement**: Data is analyzed to make ongoing improvements to the app.
- **Research**: Anonymized or aggregated scores may be used for research purposes to evaluate the effectiveness of VR as an educational tool. No personally identifiable information will be used for these research activities without explicit consent.

### Data Security

We employ standard security measures to protect your information.

### Data Sharing

We do not share your data with third parties unless required by law.

### Your Rights

- Access to your data
- Rectification of your data
- Deletion of your data

To exercise any of these rights, please contact us at [Insert Contact Information].

### Consent for Research

If we intend to use your personally identifiable information for research purposes, we will obtain your explicit consent in advance.

### Changes to this Policy

We reserve the right to update this policy. Changes will be noted here.

### Contact

For questions about this privacy policy, please contact [Insert Contact Information].
  `;

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
