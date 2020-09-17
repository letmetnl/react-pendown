import React, { Component } from "react";
// importing the list item
import Item from "./Item";
export default class FullList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Your Notes</h3>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear Full-List
        </button>
      </ul>
    );
  }
}
