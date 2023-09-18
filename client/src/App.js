import React, { Fragment } from "react";
import axios from "axios";
import "./App.scss";
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Masterclassroom from "./components/Masterclassroom";
import Masterclassroomguitare from "./components/Masterclassroomguitare";
import Masterclassroomsaxo from "./components/Masterclassroomsaxo";
import Masterclassroomviolon from "./components/Masterclassroomviolon";
import Masterclassroomclarinette from "./components/Masterclassroomclarinette";
import Masterclassroombatterie from "./components/Masterclassroombatterie";
import Masterclassroompiano from "./components/Masterclassroompiano";
import Masterclassroomlive from "./components/Masterclassroomlive";
import NoPage from "./components/NoPage";
import Header from './components/Header';
import Footer from './components/Footer';
import Conditionsgenerales from "./components/Conditionsgenerales";
import Politiqueconfidentialite from "./components/Politiqueconfidentialite";
import cgv from "./components/cgv";
import Cgv from "./components/cgv";


export default class App extends React.Component {
    
  deploy1() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/database")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  deploy2() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  deploy3() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/meow")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }
  deploy4() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/foo/")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test2() {
    axios
      .get("http://localhost:4000/foo/database")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test3() {
    axios
      .get("http://localhost:4000/foo/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test4() {
    axios
      .get("http://localhost:4000/foo/meow")
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
                            <Route path="masterclassroom" element={<Masterclassroom />} />
                            <Route path="*" element={<NoPage />} />
                            <Route path="masterclassroomlive" element={< Masterclassroomlive />}/>
                            <Route path="masterclassroomguitare" element={< Masterclassroomguitare />}/>
                            <Route path="masterclassroomsaxo" element={< Masterclassroomsaxo />}/>
                            <Route path="masterclassroomviolon" element={< Masterclassroomviolon />}/>
                            <Route path="masterclassroomclarinette" element={< Masterclassroomclarinette />}/>
                            <Route path="masterclassroombatterie" element={< Masterclassroombatterie />}/>
                            <Route path="masterclassroompiano" element={< Masterclassroompiano />}/>
                            <Route path="conditionsgenerales" element={< Conditionsgenerales />}/>
                            <Route path="politiqueconfidentialite" element={< Politiqueconfidentialite />}/>
                            <Route path="cgv" element={< Cgv />}/>
                        </Route>
                    </Routes>
                <Footer/>
            </div>
        );
    }
  }
