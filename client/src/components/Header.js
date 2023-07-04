import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import { slide as Menu } from 'react-burger-menu'

export default class Header extends React.Component {
  
  showSettings (event) {
    event.preventDefault();
  }

  menuLangueFunction(){
    let menuLangue = document.getElementById("menuBurgerLangueSecond")
    let menuPrincipal = document.getElementById("menuBurgerPrincipal")
    menuLangue.classList.toggle("hidden")
    menuPrincipal.classList.toggle("hidden")
  }

  backMenuPrincipalFunction(){
    let menuLangue = document.getElementById("menuBurgerLangueSecond")
    let menuPrincipal = document.getElementById("menuBurgerPrincipal")
    menuLangue.classList.toggle("hidden")
    menuPrincipal.classList.toggle("hidden")
  }

    render() {
        return (
          <div className="header-container">
            <div className="menu-burger">
              <Menu width={ '100%' } customBurgerIcon={ <img src="/burger.svg" /> } customCrossIcon={ <img src="/cross.svg" /> }>
                <div className="menu-burger-container" id="menuBurgerPrincipal">
                  <div className="menu-burger-link-container-all">
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Masterclasses en ligne</span>
                        <img src="/Arrow_right.svg" alt="Masterclasses en ligne" className="svg-link"/>
                      </div>
                    </Link>
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Préparez vos compétitions</span>
                        <img src="/Arrow_right.svg" alt="Préparez vos compétitions" className="svg-link"/>
                      </div>
                    </Link>
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">On-site academies</span>
                      </div>
                    </Link>
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Connexion</span>
                      </div>
                    </Link>
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Offres</span>
                      </div>
                    </Link>
                  </div>
                  <div className="menu-burger-langue-container" onClick={this.menuLangueFunction}>
                    <img src="/France.svg" alt="Langue française" className="svg-langue"/>
                    <span className="menu-burger-link">Français</span>
                    <img src="/Arrow_right.svg" alt="Changer de langue" className="svg-link"/>
                  </div>
                </div>
                <div className="menu-burger-container-second hidden" id="menuBurgerLangueSecond">
                  <div className="menu-burger-container-second-all">
                    <div className="menu-burger-container-second-back" onClick={this.backMenuPrincipalFunction}>
                      <img src="/Arrow_back.svg" alt="Revenir au menu principal" className="svg-link"></img>
                      <span className="back-link">Back</span>
                    </div>
                    <div className="menu-burger-container-second-langue-all">
                      <div className="menu-burger-container-second-all-langue-link-container">
                        <img src="/UK.svg" alt="English" className="svg-langue"></img>
                        <span className="menu-burger-link">English</span>
                      </div>
                      <div className="menu-burger-container-second-all-langue-link-container">
                        <img src="/JP.svg" alt="日本語" className="svg-langue"></img>
                        <span className="menu-burger-link">日本語</span>
                      </div>
                      <div className="menu-burger-container-second-all-langue-link-container">
                        <img src="/SKR.svg" alt="한국어" className="svg-langue"></img>
                        <span className="menu-burger-link">한국어</span>
                      </div>                    
                    </div>
                  </div>
                </div>
              </Menu>
            </div>
            <div className="logo-header-container">
              <img src="/Logo.svg" alt="logo" />
            </div>
            <div className="account-language-container">
                <div>
                    <span className="language_indicator">FR</span>
                    <img src="/Arrow_down.svg" alt="defilement langue" />
                </div>
                <img src="/Account.svg" alt="account" />
            </div>
          </div>
        );
      }
}
