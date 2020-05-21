import React from "react";
import { Link } from "react-router-dom";
import ConnectedUsers from "./ConnectedUsers";

class Landing extends React.Component {
  render() {
    // console.log(this.state.cards)
    return (
      <div className="landingContainer">
        <div className="displayBoxes">
          <div>
            <h1>Welcome to Kinder Class</h1>
            <h3>A galaxy of fun and learning!</h3>
          </div>

          {this.props.user ? (
            <ConnectedUsers onlineUsers={this.props.connectedUsers} />
          ) : (
            <>
              <div className="landingBox">
                <h4>For teachers</h4>
                <p> Send games to your classroom in real time</p>
                <p>Keep track of their learning progress</p>
                <Link to="/login">Start!</Link>
              </div>
              <div className="landingBox">
                <h4>For kids</h4>
                <p>Play and learn in a safe environment</p>
                <Link to="/login">Play now!</Link>
              </div>
            </>
          )}
          <img className="movingStar" src="/images/star.png" alt="star" />
          <img className="movingOvni" src="/images/hint.png" alt="ovni" />
          <img
            className="movingRocket bounce"
            src="/images/star.png"
            alt="rocket"
          />
          <img
            className="movingShooting"
            src="/images/starBack2.png"
            alt="rocket"
          />
        </div>
      </div>
    );
  }
}
export default Landing;
