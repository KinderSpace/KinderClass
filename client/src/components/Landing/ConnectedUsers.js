import React from "react";
import { Link } from "react-router-dom";

class ConnectedUsers extends React.Component {
  render() {
    // console.log(this.state.cards)
    return (
      <div className="landingBox">
        <h1 style={{ color: "black", fontSize: "2rem", margin: "0rem" }}>
          Connected Users
        </h1>
        {this.props.onlineUsers.map((username, i) => {
          return <li key={i}>{username}</li>;
        })}
      </div>
    );
  }
}
export default ConnectedUsers;
