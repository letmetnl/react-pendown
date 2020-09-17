import React, { Component } from "react";

export default class takingInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-red">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Pen Down Your head"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
