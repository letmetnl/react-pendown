import React, { Component } from "react";
import TaskInput from "./components/TaskInput";
import FullList from "./components/FullList";
// using no custom css just bootstrap so commenting this
// import "./App.css";
// importing bootstrap deendency installed
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
export default class App extends Component {
  // setting state
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // prevent defaults
    // add new items
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    console.log(newItem);
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  // Clear List
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  // Delete individual items
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: filteredItems,
    });
  };

  // Edit todo item
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              Pen Down Your Thought
            </h3>
            <TaskInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <FullList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
