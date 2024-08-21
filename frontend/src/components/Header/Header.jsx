import React, { useState } from 'react';
import './Header.css';
import profilePic from '../Assets/profilePic.svg'; // Adjust the path as necessary
import searchIcon from '../Assets/searchIcon.svg'; // Adjust the path as necessary
import logo from '../Assets/logo.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
<iframe loading="lazy" style="position: relative; width: 100%; height: 600px; max-height: 80vh; border: none; border-radius: 8px; padding: 0; margin: 0; overflow: hidden;"
      src="https://www.canva.com/design/DAGMOcNbWIo/7A8NYL3MpUQCJHiHD7a3HQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
</iframe>
const Header = () => {

  const [showLogin, setShowLogin] = useState(false);

  const handleProfileClick = () =>{
    setShowLogin(!showLogin);
  };

    return (
        <header className="header">
          
    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGMOcNbWIo&#x2F;7A8NYL3MpUQCJHiHD7a3HQ&#x2F;view?utm_content=DAGMOcNbWIo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Design</a> by Mehvesh Shabbir
            <div className="menu-icon">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12h18v-2H3v2zm0-7h18V3H3v2zm0 12h18v-2H3v2z"/>
                </svg>
            </div>
            <div className="search-bar">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="profile-section">
                <span>Contact us</span>
                <img src={profilePic} alt="Profile" onClick={handleProfileClick}/>

                {showLogin && (
                  <div className="login-dialog">
                    <p>Hi!</p>
                    <button><Link to="/signin" style={{textDecoration: 'none'}}>Sign In</Link></button>
                    
                  </div>
                )}
            </div>
        </header>
    );
}

export default Header;
