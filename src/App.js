import React, { Component } from "react";
import TaskInput from "./components/TaskInput";
import FullList from "./components/FullList";
// using no custom css just bootstrap so commenting this
// import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        hello there!
        <TaskInput />
        <FullList />
      </div>
    );
  }
}
