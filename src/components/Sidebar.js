import React, { useState, useEffect } from 'react';
import './sidebar.css';
import repoIcon from '../assets/repo-icon.png';
import aiIcon from '../assets/ai-icon.png';
import cloudIcon from '../assets/cloud-icon.png';
import supportIcon from '../assets/support-icon.png';
import logoutIcon from '../assets/logout-icon.png';
import companyLogo from '../assets/company-logo.png';
import settingIcon from '../assets/settings-icon.png';
import useIcon from '../assets/use-icon.png';

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 769);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  const toggleSidebar = () => setSidebarOpen(prevState => !prevState);

  // Adjust sidebar state based on window size
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 769);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MenuItem Component
  const MenuItem = ({ icon, text, active = false, onClick }) => (
    <div className={`menu-item ${active ? 'active' : ''}`} onClick={onClick}>
      {icon && <img src={icon} alt={text} className="item-icon" />}
      <div className="item-text">{text}</div>
    </div>
  );

  // FooterItem Component
  const FooterItem = ({ icon, text }) => (
    <div className="footer-item">
      <div className="footer-button">
        <img src={icon} alt={text} className="button-icon" />
        <div className="button-text">{text}</div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hamburger Button for toggling sidebar */}
      <button className={`hamburger ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="logo-con">
            <a href="/">
              <img src={companyLogo} alt="Company Logo" className="logo2" />
            </a>
            <div className="logo-text">CodeAnt AI</div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          {/* Dropdown for User Names */}
          <div className="menu-item1" onClick={toggleDropdown}>
            <div className="item-text">UtkarshDhairyaPanwar</div>
            <div className={`item-arrow ${isDropdownOpen ? 'open' : ''}`}></div>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {['AliKhan', 'HiraFatima', 'ShoaibKhan'].map(name => (
                <div key={name} className="dropdown-item">{name}</div>
              ))}
            </div>
          )}

          {/* Menu Items */}
          <MenuItem icon={repoIcon} text="Repositories" active />
          <MenuItem icon={aiIcon} text="AI Code Review" />
          <MenuItem icon={cloudIcon} text="Cloud Security" />
          <MenuItem icon={useIcon} text="How to Use" />
          <MenuItem icon={settingIcon} text="Settings" />
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <FooterItem icon={supportIcon} text="Support" />
          <FooterItem icon={logoutIcon} text="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
