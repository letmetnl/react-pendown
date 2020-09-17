import React, { Component } from "react";
// importing the list item
import Item from "./Item";
export default class FullList extends Component {
  render() {
    return (
      <div>
        <h1>Thought List</h1>
        <Item />
      </div>
    );
  }
}
