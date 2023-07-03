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

    render() {
        return (
          <div className="header-container">
            <div className="menu-burger">
              <Menu width={ '20%' } customBurgerIcon={ <img src="/burger.svg" /> } customCrossIcon={ <img src="/cross.svg" /> }>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
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
