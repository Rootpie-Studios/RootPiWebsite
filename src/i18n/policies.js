// Privacy-policy content in English and Swedish.
//
// Four of RootPi's policies (Bogey Beasts, Streaks, TimeTracker, Lekaos) share
// the same "RootPi AB" template and differ only in a few fields, so they are
// generated from one template here. TraumaSim VR uses a separate format.

const APP_TYPE = {
  game: { en: "game", sv: "spel" },
  app: { en: "app", sv: "app" },
};

// Collected-data items, keyed for reuse across apps.
const DATA = {
  email: { en: "Email", sv: "E-post" },
  passwordEncrypted: {
    en: "Password (stored in encrypted form)",
    sv: "Lösenord (lagras i krypterad form)",
  },
  geolocation: { en: "Geolocation", sv: "Platsdata" },
};

// Reasons personal data is collected.
const PURPOSE = {
  account: {
    en: "Personal data is collected to allow the user to create an account and use the app.",
    sv: "Personuppgifter samlas in för att låta användaren skapa ett konto och använda appen.",
  },
  activities: {
    en: "Personal data is collected to allow the app to create and track activies that the user wishes to track.",
    sv: "Personuppgifter samlas in för att låta appen skapa och följa aktiviteter som användaren vill följa.",
  },
};

const PASSWORD_SAFETY = {
  en: "Passwords are stored in hashed and encrypted form and are never stored or transmitted in plain text. ",
  sv: "Lösenord lagras i hashad och krypterad form och lagras eller överförs aldrig i klartext. ",
};

/**
 * Build the shared RootPi AB privacy policy in the given language.
 *
 * @param {object} opts
 * @param {"en"|"sv"} opts.lang
 * @param {string} opts.appName        Product name (kept as-is in both languages)
 * @param {"game"|"app"} opts.appType
 * @param {Array<keyof DATA>} opts.collected   Keys of personal data collected
 * @param {keyof PURPOSE} opts.purpose
 * @param {boolean} [opts.includePasswordSafety]
 * @param {{en: string, sv: string}} opts.publishDate
 */
export function templatePolicy({
  lang,
  appName,
  appType,
  collected,
  purpose,
  includePasswordSafety = false,
  publishDate,
}) {
  const appTypeWord = APP_TYPE[appType][lang];
  const collectedList = collected.map((key) => `* ${DATA[key][lang]}`).join("\n");
  const purposeText = PURPOSE[purpose][lang];
  const passwordSafety = includePasswordSafety ? PASSWORD_SAFETY[lang] : "";

  if (lang === "sv") {
    return `
**Integritetspolicy för ${appName}**

**1. Bakgrund**

Denna personuppgiftspolicy ("Policy") anger **regler** och **riktlinjer** för hur personuppgifter hanteras av **RootPi AB**:s ${appTypeWord} ${appName}. Policyn anger hur personuppgifter samlas in, vad de används till, hur appens användare kontrollerar sina personuppgifter och hur användare kan kontakta den ansvarige med eventuella frågor.

**2. Syfte**

Syftet med denna policy är att **ge appens användare information** om hur deras personuppgifter kan användas av appen.

**3. Definition av personuppgifter**

Personuppgifter är all information som, direkt eller indirekt, kan användas för att **identifiera en levande fysisk person**. Med **direkta personuppgifter** kan en person identifieras utifrån en enda uppgift, medan **indirekta personuppgifter** kan identifiera en person tillsammans med andra uppgifter.

**4. Användarens samtycke**

**a) Begäran om samtycke**

För att samla in personuppgifter måste användaren samtycka till vilka uppgifter som samlas in. Begäran ska vara informativ och tydlig så att alla användare förstår innebörden av den.

Vi inhämtar samtycke på följande sätt:

* Samtycke begärs genom att en ny användare ombeds läsa och godkänna denna policy innan de kan använda appen.

**b) Återkalla samtycket**

En användare kan när som helst återkalla sitt samtycke, vilket görs på följande sätt:

* Samtycke kan återkallas genom att radera kontot i appen eller genom att skicka ett e-postmeddelande till [info@rootpi.xyz](mailto:info@rootpi.xyz).

**c) Rätt att få personuppgifter raderade**

När samtycket återkallas kan användaren även begära att deras personuppgifter raderas från alla servrar. Detta görs med ett e-postmeddelande till [info@rootpi.xyz](mailto:info@rootpi.xyz).

**5. Behandling av personuppgifter**

**a) Personuppgifter som samlas in**

Följande personuppgifter samlas in av appen och behandlas av oss:

${collectedList}

**b) Skäl för insamling av personuppgifter**

Personuppgifterna samlas in och behandlas för följande ändamål:

* ${purposeText}

**c) Personuppgifter delas med**

Alla insamlade personuppgifter förvaras hos **RootPi AB** och kommer inte att säljas eller lämnas ut till tredje part.

**d) Period som personuppgifter sparas**

Personuppgifterna får endast sparas under den period de behövs för appens funktionalitet.

**6. Säkerhet och kryptering**

All trafik till servern är krypterad med SSL-certifikat (Secure Socket Layer) som säkerställer att användarens personuppgifter överförs på ett säkert och konfidentiellt sätt genom kryptering av informationen. ${passwordSafety}Appen har vidtagit lämpliga säkerhetsåtgärder för att förhindra att personuppgifter som lagras på servern går förlorade eller används på olagliga eller otillbörliga sätt. Tillgången till de personuppgifter som samlas in är begränsad till behörig personal och hanteras endast konfidentiellt.

Om en incident gällande personuppgifter inträffar kommer berörda användare att meddelas och det kommer att rapporteras till **IMY** (Integritetsskyddsmyndigheten).

**7. Användarens rättigheter**

**a) Rätt till tillgång till egna uppgifter**

Efter att ha godkänt policyn har användaren rätt att begära information om huruvida deras personuppgifter behandlas. Om de behandlas har användaren rätt att få tillgång till uppgifterna.

Begäran om tillgång till egna personuppgifter görs genom att skicka ett e-postmeddelande till [info@rootpi.xyz](mailto:info@rootpi.xyz).

Uppgifterna skickas till användaren i textform via digital e-post.

**b) Rätt till information och rättelse**

Efter att ha godkänt policyn har användaren rätt att begära vilka personuppgifter som lagras och rätta eventuella felaktiga uppgifter. Om några uppgifter saknas har användaren även rätt att komplettera dem.

**c) Rätt till radering**

Användaren har rätt att begära att alla personuppgifter kopplade till dem raderas. Det finns situationer där denna rätt inte gäller, men i följande fall måste uppgifterna raderas:

- Om personuppgifterna inte längre behövs för det ändamål de samlades in
- Om samtycket till policyn återkallas
- Om personuppgifterna används i direktmarknadsföring och användaren motsätter sig det
- Om det inte finns några berättigade skäl som väger tyngre än individens intresse av att uppgifterna raderas
- Om personuppgifterna behandlas på ett olagligt sätt
- Om raderingen krävs för att uppfylla en rättslig förpliktelse

**d) Automatiserat beslutsfattande**

Användare har rätt att inte bli föremål för automatiserade beslut, om ett sådant beslut kan få rättsliga följder för individen eller på liknande sätt påverkar hen i betydande grad.

**e) Identifiering**

Om en användare begär att information ska raderas måste användaren i fråga identifieras. Detta sker genom att användaren är inloggad på sitt konto.

**f) Klagomål**

Om en användare anser att deras personuppgifter behandlas i strid med GDPR i appen kan ett klagomål lämnas in i första hand till oss och i andra hand till Integritetsskyddsmyndigheten.

**g) Skadestånd**

I en situation där en användares personuppgifter har behandlats i strid med GDPR kan rätt till ersättning uppstå. Ett skadeståndsanspråk kan väckas i allmän domstol med tingsrätten som första instans.

**8. Ändringar av policyn**

Denna policy publicerades den ${publishDate.sv}

Denna policy kan komma att ändras, varför appens användare uppmuntras att läsa policyn med jämna mellanrum. Användare kommer också att meddelas om eventuella ändringar som görs

**9. Kontakt**

För frågor relaterade till webbplatsen och dess innehåll kan vi nås via e-post till [info@rootpi.xyz](mailto:info@rootpi.xyz).

Svarstid: 3–5 arbetsdagar.
`;
  }

  return `
**Privacy policy for ${appName}**

**1. Background**

This personal data policy ("Policy") states **rules** and **guidelines** how personal data is handled by **RootPi AB**'s ${appTypeWord} ${appName}. The policy states how personal data is collected, what they are used for, how the app users control their personal data and how app users can contact the responsible with any questions.

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

${collectedList}

**b) Reason for collection of personal data**

The personal data is collected and processed for the following purposes:

* ${purposeText}

**c) Personal data is shared with**

All collected personal data will be contained in **RootPi AB** and will not be sold or given to any third parties.

**d) Period personal data is saved**

The personal data is only allowed to be saved for the period it is needed for the app functionallity.

**6. Safety and encryption**

All traffic to the server is encrypted with SSL-certificate (Secure Socket Layer) that ensures that the user's personal data is transfered in a secure and confidential way through encrypting the information. ${passwordSafety}The app has taken suitable security measures to prevent that personal data that is stored on the server is lost or used in illegal or unproper ways. The access to the personal data that is collected is restricted to authorized personell and will only be handled confidentially.

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

This policy was published on ${publishDate.en}

This policy may change, which is why the app's users are encouraged to read the policy periodically. Users will also be notified about any changes made

**9. Contact**

For questions related to the website and its content, we can be reached via e-mail sent to [info@rootpi.xyz](mailto:info@rootpi.xyz).

Response time: 3-5 work days.
`;
}

// Per-app configuration for the shared template.
export const POLICY_CONFIG = {
  bogeyBeasts: {
    appName: "Bogey Beasts",
    appType: "game",
    collected: ["email", "passwordEncrypted"],
    purpose: "account",
    includePasswordSafety: true,
    publishDate: { en: "May 16, 2026", sv: "16 maj 2026" },
  },
  streaks: {
    appName: "Streaks",
    appType: "app",
    collected: ["email"],
    purpose: "account",
    publishDate: { en: "November 2, 2022", sv: "2 november 2022" },
  },
  timeTracker: {
    appName: "TimeTracker",
    appType: "app",
    collected: ["email", "geolocation"],
    purpose: "activities",
    publishDate: { en: "November 2, 2022", sv: "2 november 2022" },
  },
  lekaos: {
    appName: "Lekaos",
    appType: "app",
    collected: ["email"],
    purpose: "activities",
    publishDate: { en: "December 3, 2023", sv: "3 december 2023" },
  },
};

export function traumaSimPolicy(lang) {
  if (lang === "sv") {
    return `
# Integritetspolicy för TraumaSim VR

### Introduktion
Denna integritetspolicy syftar till att informera dig om vilka uppgifter vi samlar in när du använder TraumaSim VR, varför vi samlar in dem och hur vi använder dem.

### Information vi samlar in

1. **Användarnamn**: För att unikt identifiera dig i vårt system.
2. **Tid för slutförande av ett scenario**: För att följa din prestation och inlärningskurva.
3. **Poäng för ett scenario**: För att bedöma din prestation i träningsövningar.

### Varför vi samlar in data

- För att ge en personanpassad träningsupplevelse.
- För att generera statistiska rapporter för att förbättra appen.
- För att identifiera områden för pedagogisk förbättring.
- För att utvärdera VR:s effektivitet som pedagogiskt verktyg.
- För att bidra till forskning om VR som pedagogiskt verktyg.

### Hur vi använder data

- **Personanpassning**: Ditt användarnamn hjälper oss att ge en personanpassad upplevelse och låter enskilda användare jämföra poäng med sig själva och andra över tid.
- **Prestationsmått**: Tid för slutförande och poäng används för att mäta din träningseffektivitet.
- **Förbättring**: Data analyseras för att löpande förbättra appen.
- **Forskning**: Anonymiserade eller aggregerade poäng kan användas för forskningsändamål för att utvärdera VR:s effektivitet som pedagogiskt verktyg.


### Datadelning

Vi delar inte dina uppgifter med tredje part om det inte krävs enligt lag.

### Dina rättigheter

- Tillgång till dina uppgifter
- Rättelse av dina uppgifter
- Radering av dina uppgifter

För att utöva någon av dessa rättigheter, kontakta oss på info@rootpi.xyz.

### Samtycke till forskning

Om vi avser att använda dina personligt identifierbara uppgifter för forskningsändamål kommer vi att inhämta ditt uttryckliga samtycke i förväg.

### Ändringar av denna policy

Vi förbehåller oss rätten att uppdatera denna policy. Ändringar kommer att anges här.

### Kontakt

För frågor om denna integritetspolicy, kontakta info@rootpi.xyz
  `;
  }

  return `
# Privacy Policy for TraumaSim VR

### Introduction
This privacy policy aims to inform you about the data we collect when you use TraumaSim VR, why we collect it, and how we use it.

### Information We Collect

1. **Username**: To uniquely identify you within our system.
2. **Time of Completion for a Scenario**: To track your performance and learning curve.
3. **Score for a Scenario**: To assess your performance in training exercises.

### Why We Collect Data

- To provide a personalized training experience.
- To generate statistical reports for improving the app.
- To identify areas for educational improvement.
- To evaluate the effectiveness of VR as an educational tool.
- To aid in research around VR as an educational tool.

### How We Use Data

- **Personalization**: Your username helps us provide a personalized experience and have separate users compare scores to themselves and others over time.
- **Performance Metrics**: Time of completion and score are used to gauge your training efficacy.
- **Improvement**: Data is analyzed to make ongoing improvements to the app.
- **Research**: Anonymized or aggregated scores may be used for research purposes to evaluate the effectiveness of VR as an educational tool.


### Data Sharing

We do not share your data with third parties unless required by law.

### Your Rights

- Access to your data
- Rectification of your data
- Deletion of your data

To exercise any of these rights, please contact us at info@rootpi.xyz.

### Consent for Research

If we intend to use your personally identifiable information for research purposes, we will obtain your explicit consent in advance.

### Changes to this Policy

We reserve the right to update this policy. Changes will be noted here.

### Contact

For questions about this privacy policy, please contact info@rootpi.xyz
  `;
}
