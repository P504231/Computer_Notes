import React from 'react'

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-laptop-code"></i>
            <div className="logo-text">
              <h1>Computer Awareness</h1>
              <p>Master Computer Knowledge for Competitive Exams</p>
            </div>
          </div>
          {/* Dark mode toggle completely removed */}
        </div>
      </div>
    </header>
  )
}

export default Header