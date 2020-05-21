import React from "react";
import NameCustom from "../memoryGame/NameCustom";
import Profile from "../Profile";

class Home extends React.Component {
  render() {
    return (
      <div className="containerHome">
        <div>
          <h1>WELCOME TO SPACE!</h1>
          <Profile user={this.props.user} />
        </div>
        <div>
          <h4 className="loading-ellipsis">
            Waiting for signals from Planet Earth
          </h4>
          <NameCustom user={this.props.user} />
        </div>
      </div>
    );
  }
}
export default Home;
