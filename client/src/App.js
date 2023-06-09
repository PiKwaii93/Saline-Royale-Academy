import React, { Fragment } from "react";
import axios from "axios";
import "./App.scss";
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
    
  test1() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test2() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/database")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

    render(){
        return (
            <div className="App">
                <Header/>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="blogs" element={<Blogs />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                    <button onClick={this.test1}>Test</button>
                    <button onClick={this.test2}>Data</button>
                <Footer/>
            </div>
        );
    }
  }
