import React, { Component } from "react";
import HomeKids from "./HomeKids";
import Landing from "./Landing";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          this.props.user.role === "kid" ? (
            <HomeKids
              user={this.props.user}
              socket={this.props.socket}
              {...this.props}
            />
          ) : (
            <Landing
              user={this.props.user}
              socket={this.props.socket}
              {...this.props}
            />
          )
        ) : (
          <Landing socket={this.props.socket} {...this.props} />
        )}
      </div>
    );
  }
}
