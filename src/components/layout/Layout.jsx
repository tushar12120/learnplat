import React, { useState } from 'react';
import './Layout.css';

const Layout = ({ children, activeLevel, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>ITI HTML <br/><span className="highlight">Platform</span></h2>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-group">
            <h3>Curriculum</h3>
            <button 
              className={`nav-item ${activeLevel === 1 ? 'active' : ''}`}
              onClick={() => onNavigate(1)}
            >
              <span className="icon">01</span>
              Basics & Structure
            </button>
            <button 
              className={`nav-item ${activeLevel === 2 ? 'active' : ''}`}
              onClick={() => onNavigate(2)}
            >
              <span className="icon">02</span>
              Tags & Attributes
            </button>
            <button 
              className={`nav-item ${activeLevel === 3 ? 'active' : ''}`}
              onClick={() => onNavigate(3)}
            >
              <span className="icon">03</span>
              Layouts & Semantic
            </button>
            <button 
              className={`nav-item ${activeLevel === 4 ? 'active' : ''}`}
              onClick={() => onNavigate(4)}
            >
              <span className="icon">04</span>
              Advanced Form/Table
            </button>
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>Student Portfolio</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <button className="toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            ☰
          </button>
          <div className="breadcrumbs">
             Level {activeLevel}
          </div>
          <div className="user-profile">
             <span>Student</span>
          </div>
        </header>
        <div className="content-scrollable">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
