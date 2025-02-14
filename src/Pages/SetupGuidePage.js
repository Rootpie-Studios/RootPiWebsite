import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import logo from "../images/LogoTextTransBlack.png";
import "../css/setup_guide.css";

/**
 * Setup guide page component that provides instructions for setting up a new project
 * using RootPi's tech stack
 */
function SetupGuidePage() {
  const setupGuideMarkdown = `
# RootPi Project Setup Guide

## 1. Create New Project

To create a new project with our complete stack, run the following command in your terminal:

\`\`\`bash
curl -o rootpi-setup.sh https://raw.githubusercontent.com/Rootpie-Studios/bash-scripts/refs/heads/main/rootpi-setup.sh && chmod +x rootpi-setup.sh && ./rootpi-setup.sh
\`\`\`

This command will:
1. Download our setup script
2. Make it executable
3. Run the setup process

The setup script will:
- Install Docker if not present
- Create a new Laravel project
- Install and configure:
  - Laravel Jetstream with Inertia
  - Laravel Pulse
  - Laravel Horizon
  - Laravel Scout
  - Laravel Sail
- Set up PostgreSQL, Redis, and Meilisearch
- Configure all necessary environment variables
- Start the development environment

## What's Next?

After the setup is complete, your project will be ready for development with:
- A fully configured Laravel backend
- Inertia.js + Vue.js frontend
- PostgreSQL database
- Redis for caching and queues
- Meilisearch for full-text search
- Docker-based development environment
`;

  return (
    <div className="App">
      <Header
        subtitle={<img className="header-image-container" src={logo} alt="" />}
      />
      <main>
        <div>
          <div className="setup-guide-container markdown-content">
            <ReactMarkdown>{setupGuideMarkdown}</ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SetupGuidePage;
