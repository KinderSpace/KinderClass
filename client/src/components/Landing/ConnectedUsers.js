import React from "react";
import { Link } from "react-router-dom";

class ConnectedUsers extends React.Component {
  render() {
    // console.log(this.state.cards)
    return (
      <div className="landingBox">
        {this.props.onlineUsers.map((username, i) => {
          return <li key={i}>{username}</li>;
        })}
      </div>
    );
  }
}
export default ConnectedUsers;
