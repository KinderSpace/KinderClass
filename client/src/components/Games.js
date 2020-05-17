import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class Games extends React.Component {
  state = {
    isVisible: false,
  };
  render() {
    return (
      <div className="allGames">
        <div className="title">
          <img className="imgBack" src="/images/starBack2.png" />
          <h1>Time to play!</h1>
          <img className="imgBack" src="/images/starBack.png" />
        </div>
        <div className="gameChoiceDashboard">
          <div className="gameChoice">
            <div className="containerGameChoice">
              <img src="/images/mars2.png" />
              <h2>Tutti Frutti</h2>

              <Link to="/games/tutti-frutti">Play now!</Link>
            </div>
          </div>
          <div className="gameChoice">
            <div className="containerGameChoice">
              <img src="/images/gameChoice.png" />
              <h2>Math Mars</h2>
              <Link to="/games/math-mars">Play now!</Link>
            </div>
          </div>
          <div className="gameChoice">
            <div className="containerGameChoice">
              <h2>Comming soon</h2>

              <Link to="/games/math-mars">Play now!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Games;
