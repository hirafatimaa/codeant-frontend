import React, { useState } from 'react';
import './HomePage.css';
import companyLogo from '../assets/company-logo.png';
import subtractIcon from '../assets/Subtract.png';
import pieIcon from '../assets/pie-chart.png';
import githubIcon from '../assets/github-icon.png';
import gitlabIcon from '../assets/gitlab-icon.png';
import bitIcon from '../assets/bitbucket-icon.png';
import azureIcon from '../assets/azure-icon.png';
import keyIcon from '../assets/key-icon.png';

// Tab content component to display different authentication options based on selected tab
const TabContent = ({ activeTab }) => {
  // Define authentication buttons for different tabs
  const authButtons = {
    SAAS: [
      { src: githubIcon, alt: 'Github', text: 'Sign in with Github', href: '/repository' },
      { src: bitIcon, alt: 'Bitbucket', text: 'Sign in with Bitbucket', href: '/repository' },
      { src: azureIcon, alt: 'Azure Devops', text: 'Sign in with Azure Devops', href: '/repository' },
      { src: gitlabIcon, alt: 'GitLab', text: 'Sign in with GitLab', href: '/repository' }
    ],
    'Self Hosted': [
      { src: gitlabIcon, alt: 'Gitlab', text: 'Self Hosted GitLab', href: '/repository' },
      { src: keyIcon, alt: 'SSO', text: 'Sign in with SSO', href: '/repository' }
    ]
  };

  return (
    <div className="bottom-section">
      <div className="card-container">
        <div className="auth-section">
          {/* Map through the active tab's auth buttons */}
          {authButtons[activeTab].map(({ src, alt, text, href }, index) => (
            <a href={href} key={index}>
              <div className="auth-button">
                <div className="auth-icon">
                  <img src={src} alt={alt} />
                </div>
                <div className="auth-text">{text}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('SAAS');

  // Function to handle tab click and set active tab
  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="home-page">
      {/* Sidebar Section */}
      <div className="side-bar">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-card-header">
              {/* Company logo and title */}
              <img src={companyLogo} alt="Company Logo" className="logo" />
              <div className="stat-title">AI to Detect & Autofix Bad Code</div>
            </div>
            <div className="divider"></div>
            <div className="stat-values">
              {/* Displaying stats such as language support, developers, hours saved */}
              {['30+', '10K+', '100K+'].map((value, index) => (
                <div className="stat-value" key={index}>
                  <div className="stat-number">{value}</div>
                  <div className="stat-label">{['Language Support', 'Developers', 'Hours Saved'][index]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="containers">
          <div className="container">
            {/* Pie chart and percentage of issues fixed this week */}
            <div className="circle-container">
              <div className="outer-circle" />
              <div className="inner-circle-container">
                <img src={pieIcon} alt="Pie Chart" className="piechart" />
              </div>
            </div>

            <div className="right-section">
              <div className="percentage-text">
                <span className="arrow">↑</span> 14%
              </div>
              <div className="week-text">This week</div>
            </div>

            <div className="fixed-container">
              <div className="fixed-text">Issues Fixed</div>
              <div className="fixed-count">500K+</div>
            </div>
          </div>
        </div>

        {/* Placeholder bar image */}
        <img src={subtractIcon} alt="Icon" className="placeholder-bar" />
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="content-card">
          <div className="card-header">
            <div className="logo-container">
              {/* Company logo with link to homepage */}
              <a href="/">
                <img src={companyLogo} alt="Company Logo" className="logo2" />
              </a>
              <div className="app-title">CodeAnt AI</div>
            </div>
            <h2 className="welcome-message">Welcome to CodeAnt AI</h2>
          </div>

          {/* Tab Buttons */}
          <div className="t-container">
            <div className="tab-button-container">
              {/* Render tabs dynamically */}
              {['SAAS', 'Self Hosted'].map((tab) => (
                <div
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  <div className={`tab-button-text ${activeTab === tab ? 'active' : 'inactive'}`}>
                    {tab}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content displayed based on active tab */}
          <TabContent activeTab={activeTab} />

          {/* Privacy Policy text */}
          <div className="privacy-text">
            <span className="privacy-default">By signing up you agree to the </span>
            <span className="privacy-bold">Privacy Policy</span>
            <span className="privacy-default">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
