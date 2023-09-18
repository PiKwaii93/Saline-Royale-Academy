import React, { Fragment } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import OtherPage from "./components/OtherPage";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          todos: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddTodo = (value) => {
    console.log(this.state.todos)
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
      console.log(this.state.todos)
  };

  test() {
    axios
      .get("http://localhost:4000/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test2() {
    axios
      .get("http://127.0.0.1:4000/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test3() {
    axios
      .get("http://172.31.0.1:4000/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test4() {
    axios
      .get("http://192.168.144.1:4000/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }

  test5() {
    axios
      .get("http://groupe1.hetic-projects.arcplex.tech/test")
      .then((response) => {
        console.log(response)
      })
      .catch((e) => console.log("Error : ", e));
  }


  render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Header/>
              <button onClick={this.test}>Click me</button>
              <button onClick={this.test2}>Click me</button>
              <button onClick={this.test3}>Click me</button>
              <button onClick={this.test4}>Click me</button>
              <button onClick={this.test5}>Click me</button>
              <AddTodo handleAddTodo={this.handleAddTodo} />
              <TodoList todos={this.state.todos} />
            <Footer/>
          </div>
          <header>
              <div>this is a blablabla</div>
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other page</Link>
          </header>
          <div>
            <Routes>
              <Route exact path="/"><MainComponent/></Route>
              <Route path="/otherpage"><OtherPage/></Route>
            </Routes>
          </div>
        </Fragment>
      </Router>
    );
  }
}
