import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './repository.css';
import searchIcon from '../assets/search-icon.png';
import plusIcon from '../assets/plus-icon.png';
import refreshIcon from '../assets/refresh-icon.png';
import RepoCard from './RepoCard';

const RepositoryPage = () => {
  // Manage the search query input by the user
  const [searchQuery, setSearchQuery] = useState('');

  // Repository data
  const repositories = [
    { name: 'design-system', badge: 'Public', language: 'React', size: '7320 KB', updated: 'Updated 1 day ago' },
    { name: 'codeant-ci-app', badge: 'Private', language: 'JavaScript', size: '5871 KB', updated: 'Updated 2 days ago' },
    { name: 'analytics-dashboard', badge: 'Private', language: 'Python', size: '4521 KB', updated: 'Updated 5 days ago' },
    { name: 'mobile-app', badge: 'Public', language: 'Swift', size: '3096 KB', updated: 'Updated 3 days ago' },
    { name: 'e-commerce-platform', badge: 'Private', language: 'Java', size: '6210 KB', updated: 'Updated 6 days ago' },
    { name: 'blog-website', badge: 'Public', language: 'HTML/CSS', size: '1876 KB', updated: 'Updated 4 days ago' },
    { name: 'social-network', badge: 'Private', language: 'PHP', size: '5432 KB', updated: 'Updated 7 days ago' },
  ];

  // Filter repositories based on the search query
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle change in search query input
  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  return (
    <div className="repository-page">
      {/* Sidebar component for navigation */}
      <Sidebar />
      <div className="main-content">
        {/* Header section, includes search bar and action buttons */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          repoCount={filteredRepositories.length}
        />
        {/* List of repositories displayed based on the search query */}
        <RepoList repositories={filteredRepositories} />
      </div>
    </div>
  );
};

// Header component 
const Header = ({ searchQuery, onSearchChange, repoCount }) => (
  <div className="header">
    <div className="content">
      <div className="frame2">
        <div className="date-and-text">
          {/* The total count of filtered repositories */}
          <div className="text-title">Repositories</div>
          <div className="text-subtitle">{repoCount} total repositories</div>
        </div>
        <div className="frame1">
          {/* Action buttons for refresh and adding a new repository */}
          <Button icon={refreshIcon} label="Refresh All" className="button-refresh" />
          <Button icon={plusIcon} label="Add Repository" className="button-add-repo" />
        </div>
      </div>
      {/* Search bar to filter repositories */}
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
    </div>
  </div>
);

// Button component to render action buttons with an icon and label
const Button = ({ icon, label, className }) => (
  <div className={`button ${className}`}>
    <img src={icon} className="icon" alt={label} />
    <div className="text">{label}</div>
  </div>
);

// SearchBar component to handle the search functionality
const SearchBar = ({ searchQuery, onSearchChange }) => (
  <div className="search-bar">
    <img src={searchIcon} className="search-icon" alt="search" />
    <input
      type="text"
      placeholder="Search Repositories"
      value={searchQuery}
      onChange={onSearchChange} 
    />
  </div>
);

// RepoList component that renders a list of RepoCard components based on filtered repositories
const RepoList = ({ repositories }) => (
  <div className="repo-list">
    {repositories.map((repo, index) => (
      <RepoCard key={index} repoData={repo} />
    ))}
  </div>
);

export default RepositoryPage;
