import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav-bar">
      <button className="nav-button" type="button">
        first
      </button>
      <button className="nav-button" type="button">
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
      <div className="current-page">page</div>
      <button className="nav-button" type="button">
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
      <button className="nav-button" type="button">
        last
      </button>
    </div>
  );
}

export default NavigationBar;
