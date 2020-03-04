import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Search from './Search';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="header">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="header-title-wrapper">
        <i className="material-icons md-48 header-title-icon">movie_creation</i>
        <h1 className="principal-title">Movies</h1>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Header;
