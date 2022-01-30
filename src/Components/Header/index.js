import React from "react";
import "./style.css";

import punklogo from "../../assets/header/cryptopunk-logo.png";
import seacrchIcon from "../../assets/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} alt="cryptopunk" className="punklogo" />
      </div>
      <div className="searchBar ">
        <div className="searchIconContainer">
          <img src={seacrchIcon} alt="seacrchBar" className="seacrchIcon" />
        </div>
        <input
          className="searchInput"
          placeholder="collection, item, others ..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplaces</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwithContainer">
          <img src={themeSwitchIcon} alt="theme" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
