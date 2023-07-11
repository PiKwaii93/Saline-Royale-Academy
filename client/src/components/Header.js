import React, { useEffect, useState } from "react";
import {Routes, Route, Link, useNavigate, useParams, useLocation} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import { slide as Menu } from 'react-burger-menu'
import HideIfLogged from './HideIfLoggin';
import HideIfNotLogged from './HideIfNotLogged';

import { useDispatch } from 'react-redux';
import { disconnect } from '../features/userSlice';
import { useSelector } from 'react-redux'; 

export default function Header(){
  
  

  function menuLangueFunction(){
    let menuLangue = document.getElementById("menuBurgerLangueSecond")
    let menuPrincipal = document.getElementById("menuBurgerPrincipal")
    menuLangue.classList.toggle("hidden")
    menuPrincipal.classList.toggle("hidden")
  }

  function backMenuPrincipalFunction(){
    let menuLangue = document.getElementById("menuBurgerLangueSecond")
    let menuPrincipal = document.getElementById("menuBurgerPrincipal")
    menuLangue.classList.toggle("hidden")
    menuPrincipal.classList.toggle("hidden")
  }

  const location = useLocation();

  

  useEffect(() => {
    setMenuOpen(false)
  }, [location]);

  const [menuOpen, setMenuOpen] = useState(false)


  function handleOpen(){
    setMenuOpen(true)
  }

  function handleClose(){
    setMenuOpen(false)
  }

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  

        return (
          <div className="header-container">
            <div className="menu-burger" >
              <Menu width={ '100%' } customBurgerIcon={ <img src="/burger.svg" /> } customCrossIcon={ <img src="/cross.svg"/> } isOpen={menuOpen} onOpen={handleOpen} onClose={handleClose}>
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
                    <Link to="/login" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Connexion</span>
                      </div>
                    </Link>
                    <Link to="/" className="menu-burger-link-prevent-style">
                      <div className="menu-burger-link-container">
                        <span className="menu-burger-link">Offres</span>
                      </div>
                    </Link>
                    <HideIfNotLogged>
                      <div className="menu-burger-link-container" onClick={() => dispatch(disconnect())}>
                        <span className="menu-burger-link">Disconnect</span>
                      </div>
                    </HideIfNotLogged>
                  </div>
                  <div className="menu-burger-langue-container" onClick={menuLangueFunction}>
                    <img src="/France.svg" alt="Langue française" className="svg-langue"/>
                    <span className="menu-burger-link">Français</span>
                    <img src="/Arrow_right.svg" alt="Changer de langue" className="svg-link"/>
                  </div>
                </div>
                <div className="menu-burger-container-second hidden" id="menuBurgerLangueSecond">
                  <div className="menu-burger-container-second-all">
                    <div className="menu-burger-container-second-back" onClick={backMenuPrincipalFunction}>
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
                <Link to="/account" className="menu-burger-link-prevent-style">
                  <span className="back-text"><img src="/Account.svg" alt="account" /></span>
                </Link>
            </div>
          </div>
        );
}
