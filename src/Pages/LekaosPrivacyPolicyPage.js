import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/privacy_policy.css";

function LekaosPrivacyPolicyPage() {
  const privacyPolicyMarkdown = `
  **Privacy policy for Lekaos**

**1. Background**

This personal data policy (“Policy”) states **rules** and **guidelines** how personal data is handled by **RootPi AB**'s app Lekaos. The policy states how personal data is collected, what they are used for, how the app users control their personal data and how app users can contact the responsible with any questions.

**2. Purpose**

The purpose of this policy is to **give app users information** about how their personal data could be used by the app.

**3. Definition of personal data**

Personal data is any information that, either directly or indirectly, could be used to **identify a living physical individual**. With **direct personal data** an individual can be identified by one sole data point while **indirect personal data** can identifiy an individual together with other data points.

**4. User agreement**

**a) Requesting user agreement**

In order to collect personal data the user has to agree to what data is collected. The request should be made informative and clear so that all users know the meaning of it.

We collect agreement in the following way:

* Agreement is requested by asking a new user to read and accept this policy before they can use the app.

**b) Revoking the agreement**

A user can at any point revoke their agreement, which is made in the following way:

* Agreement can be revoked by deleting the account in the app or sending an email to [info@rootpi.xyz](mailto:info@rootpi.xyz).

**c) Right to have personal data deleted**

When the agreement is revoked the user can also request their personal data to be deleted from all servers. This is done with an email to [info@rootpi.xyz](mailto:info@rootpi.xyz).

**5. Processing of personal data**

**a) Personal data that is collected**

The following personal data is collected by the app and processed by us:

* Email

**b) Reason for collection of personal data**

The personal data is collected and processed for the following purposes:

* Personal data is collected to allow the app to create and track activies that the user wishes to track.

**c) Personal data is shared with**

All collected personal data will be contained in **RootPi AB** and will not be sold or given to any third parties.

**d) Period personal data is saved**

The personal data is only allowed to be saved for the period it is needed for the app functionallity.

**6. Safety and encryption**

All traffic to the server is encrypted with SSL-certificate (Secure Socket Layer) that ensures that the user's personal data is transfered in a secure and confidential way through encrypting the information. The app has taken suitable security measures to prevent that personal data that is stored on the server is lost or used in illegal or unproper ways. The access to the personal data that is collected is restricted to authorized personell and will only be handled confidentially.

If an incident regarding personal data occurs the affected users will be notified and it will be reported to **IMY** (Swedish Authority for Privacy Protection).

**7. User rights**


**a) Right to access own data**

After agreeing to the policy the user has the right to request information if their personal data is being proccessed. If they are proccessed the user has the right to access the data.

The request to access own personal data is made by sending an email to [info@rootpi.xyz](mailto:info@rootpi.xyz).

The data is sent to the user in text via digital email.

**b) Right to information and correction**

After agreeing to the policy the user has the right to request what personal data that is being stored and correct any faulty information. If any data is missing the user also have the right to complete them.

**c) Right to deletion**

The user has the right to request that all personal data connected to them is deleted. There are situations where this right is not valid but in following cases the data must be deleted:

- If the personal data is no longer needed for the purpose it was collected
- If the agreement of the policy is revoked
- If the personal data is used in direct marketing and the user opposes it
- If there is no legitimate reasons that outweighs the individual's interest in deleting the information
- If the personal data is processed in an illegal way
- If the deletion is required to fulfill a legal obligation

**d) Automated decision making**

Users have the right not to be subject to automated decisions, if such a decision can have legal consequences for the individual or similarly affect him to a significant degree.

**e) Identification**

If a user requests that information should be deleted, the user in question must be identified. This is done by the user being authorized to their account.

**f) Complaint**

If a user considers their personal data to being processed in violation of the GDPR in the app, a complaint can be submitted primarily to us and secondarily to the Swedish Privacy Protection Authority.

**g) Damages**

In a situation where a user's personal data has been processed in violation of the GDPR, a right to compensation may arise. A claim for damages can be brought in general court with the district court as the first instance.

**8. Changes to the Policy**

This policy was published on December 3, 2023

This policy may change, which is why the app's users are encouraged to read the policy periodically. Users will also be notified about any changes made

**9. Contact**

For questions related to the website and its content, we can be reached via e-mail sent to [info@rootpi.xyz](mailto:info@rootpi.xyz).

Response time: 3-5 work days.

  
  `;

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
