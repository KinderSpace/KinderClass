import React, { Component } from "react";

export default class Search extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="query">Search by username:</label>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
        <label htmlFor="game">Choose a game:</label>
        <select id="game" name="game" onChange={this.props.handleFilters}>
          <option value="tutti-frutti">Tutti Frutti</option>
          <option value="math-mars">Math Mars</option>
        </select>
      </div>
    );
  }
}
