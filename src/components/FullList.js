import React, { Component } from "react";
// importing the list item
import Item from "./Item";
export default class FullList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Your Notes</h3>
        <Item />
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          Clear Full-List
        </button>
      </ul>
    );
  }
}
