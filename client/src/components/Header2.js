import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
import { slide as Menu } from 'react-burger-menu'

export default class Header2 extends React.Component {

    render() {
        return (
            <div className="header-container-desktop">
                <div className="logo-header-container-desktop">
                    <img src="/logo-desktop.svg" alt="logo" />
                </div>
                <div className="link-header-container-desktop">
                    <Link to="/" className="link-header-desktop">Home</Link>
                    <Link to="/blogs" className="link-header-desktop">Blogs</Link>
                    <Link to="/contact" className="link-header-desktop">Contact</Link>
                </div>
                <div className="account-language-container-desktop">
                    <div className="arrow-header-desktop">
                        <div className="arrow-header-desktop-text">FR</div>
                        <img src="/Arrow_down.svg" alt="defilement langue" />
                    </div>
                    <img className="search-header-desktop" src="/search.svg" alt="search" />
                    <img src="/Account.svg" alt="account" />
                </div>
            </div>
        );
      }
}
