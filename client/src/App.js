import React, { Fragment } from "react";
import axios from "axios";
import "./App.scss";
import {Routes, Route, Navigate} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Header from './components/Header';
import Footer from './components/Footer';
import Header2 from "./components/Header2";
import Login from "./components/Login";
import Register from "./components/Register";
import HideIfLogged from './components/HideIfLoggin';
import HideIfNotLogged from './components/HideIfNotLogged';
import Account from "./components/Account";
import Forum from "./components/Forum";

export default function App() {
    
  function deploy1() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/database")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  function deploy2() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  function deploy3() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/meow")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  function deploy4() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  function test2() {
    axios
      .get("http://localhost:4000/foo/database")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  function test3() {
    axios
      .get("http://localhost:4000/foo/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  function test4() {
    axios
      .get("http://localhost:4000/foo/meow")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  


        return (
            <div className="App">
                {window.innerWidth > 1200 ? <Header2/> : <Header/>}
                    <HideIfLogged>
                      <Routes>
                        <Route path="/*" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/forum" element={<Forum/>} />
                      </Routes>
                    </HideIfLogged>
                    <HideIfNotLogged>
                      <Routes>
                        <Route path="/" element={<Layout />}>
                          <Route index element={<Home />} />
                          <Route path="blogs" element={<Blogs />} />
                          <Route path="contact" element={<Contact />} />
                          <Route path="/login" element={<Navigate to="/" />} />
                          <Route path="/register" element={<Navigate to="/" />} />
                          <Route path="/account" element={<Account/>} />
                          <Route path="/forum" element={<Navigate to="/" />} />
                          <Route path="*" element={<NoPage />} />
                        </Route>
                      </Routes>
                    </HideIfNotLogged>
                    <button onClick={deploy1}>Deploy</button>
                    <button onClick={deploy2}>Deploy</button>
                    <button onClick={deploy3}>Deploy</button>
                    <button onClick={deploy4}>Deploy</button>

                    <button onClick={test2}>Test</button>
                    <button onClick={test3}>Test</button>
                    <button onClick={test4}>Test</button>
                <Footer/>
            </div>
        );
  }
