import React, { Component } from "react";

export default class Search extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
          placeholder="username"
        />
        <select id="game" name="game" onChange={this.props.handleFilters}>
          <option value="">All games</option>
          <option value="tutti-frutti">Tutti Frutti</option>
          <option value="math-mars">Math Mars</option>
        </select>
        <select
          id="category"
          name="category"
          onChange={this.props.handleFilters}
        >
          <option value="">No category</option>
          <option value="B">Tutti Frutti: B</option>
          <option value="C">Tutti Frutti: C</option>
          <option value="D">Tutti Frutti: D</option>
          <option value="P">Tutti Frutti: P</option>
        </select>

        <select
          id="date"
          name="date"
          onChange={this.props.handleFilters}
          defaultValue={60 * 24 * 60 * 60 * 1000}
        >
          <option value={60 * 60 * 1000}>Last hour</option>
          <option value={24 * 60 * 60 * 1000}>Last 24 hours</option>
          <option value={7 * 24 * 60 * 60 * 1000}>Last 7 days</option>
          <option value={30 * 24 * 60 * 60 * 1000}>Last 30 days</option>
          <option value={60 * 24 * 60 * 60 * 1000}>Last 60 days</option>
        </select>
      </div>
    );
  }
}
