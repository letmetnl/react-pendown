import React, { Component } from "react";
import TaskInput from "./components/TaskInput";
import FullList from "./components/FullList";
// using no custom css just bootstrap so commenting this
// import "./App.css";
// importing bootstrap deendency installed
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Pen Down Your Thought
            </h3>
            <TaskInput />
            <FullList />
          </div>
        </div>
      </div>
    );
  }
}
