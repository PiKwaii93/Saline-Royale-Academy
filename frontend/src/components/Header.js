import React from "react";

export default class Header extends React.Component {
  
    

    render() {
        return (
          <div className="header-container">
            <div className="menu-burger">
                <span className="menu-burger-span"></span>
                <span className="menu-burger-span"></span>
                <span className="menu-burger-span"></span>
            </div>
            <div className="logo-header-container">
                <img src="./Logo.svg" alt="logo" />
            </div>
            <div className="account-language-container">
                <div>
                    <span className="language_indicator">FR</span>
                    <img src="./Arrow_down.svg" alt="defilement langue" />
                </div>
                <img src="./Account.svg" alt="account" />
            </div>
          </div>
        );
      }
}
