import React, { Component } from "react";
import axios from "axios";

export default class Stats extends Component {
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios.get("/api/stats").then((users) => {});
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.user.username} from Stats</h1>
      </div>
    );
  }
}
