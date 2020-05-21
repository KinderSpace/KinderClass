import React from "react";
// import { Link } from "react-router-dom";
import shuffle from "../../services/tuttiFrutti";
import PopUpWin from "../tuttiFrutti/PopUpWin";
import PopUpLose from "../tuttiFrutti/PopUpLose";
import Tries from "../tuttiFrutti/Tries";
import { Redirect } from "react-router-dom";
import axios from "axios";
import GreetingMessage from "../tuttiFrutti/GreetingMessage";

class MathMars extends React.Component {
  state = {
    numA: 0,
    numB: 0,
    nums: shuffle([
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
    ]),
    tries: 3,
    right: 0,
    score: 100,
    redirect: false,
    showBadMessage: false,
    help: false,
    star: true,
  };

  startTheGame = () => {
    this.setState({
      numA: Math.floor(Math.random() * 2) + 1,
      numB: Math.floor(Math.random() * 2) + 1,
    });
  };

  emit = () => {
    this.props.socket.emit("set-game", {
      newGame: "/games/math-mars/",
    });
  };
  componentDidMount = () => {
    this.startTheGame();
    const scoreCounter = setInterval(this.timer, 1000);
    this.setState({ scoreCounter: scoreCounter });
  };
  timer = () => {
    this.setState({
      score: this.state.score - 1,
    });
  };
  handleClick = (event, num) => {
    if (num[0] === this.state.numA + this.state.numB) {
      this.getNewNumbers();
      this.setState({
        score: this.state.score + 10,
        showGoodMessage: true,
        right: this.state.right + 1,
      });
      setTimeout(
        function () {
          this.setState({ showGoodMessage: false });
        }.bind(this),
        2000
      );
    } else {
      this.setState({
        tries: this.state.tries - 1,
        score: this.state.score - 20,
        showBadMessage: true,
      });
      setTimeout(
        function () {
          this.setState({ showBadMessage: false });
        }.bind(this),
        2000
      );
    }
  };

  getNewNumbers = () => {
    let newNumA = Math.floor(Math.random() * 2) + 1;
    let newNumB = Math.floor(Math.random() * 2) + 1;
    while (this.state.numA === newNumA && this.state.numB === newNumB) {
      newNumA = Math.floor(Math.random() * 2) + 1;
      newNumB = Math.floor(Math.random() * 2) + 1;
    }
    this.setState({
      numA: newNumA,
      numB: newNumB,
    });
  };

  handleRedirect = () => {
    axios.post(`/api/games/math-mars`, this.state).then(() => {
      this.getNewNumbers();
      this.setState({
        // redirect: true,
        nums: shuffle([
          [1, "One"],
          [2, "Two"],
          [3, "Three"],
          [4, "Four"],
        ]),
        tries: 3,
        right: 0,
        score: 100,
        redirect: false,
        showGoodMessage: false,
        showBadMessage: false,
        help: false,
        star: true,
      });
    });
  };
  handleHover = () => {
    this.setState({
      help: true,
      star: false,
    });
  };

  componentWillUnmount() {
    clearInterval(this.scoreCounter);
  }
  render() {
    return (
      <div>
        {this.state.tries < 1 && (
          <div className="congratulations">
            <PopUpLose buttonMethod={this.handleRedirect} />
          </div>
        )}
        {this.state.right === 3 && (
          <div className="congratulations">
            <PopUpWin buttonMethod={this.handleRedirect} />
          </div>
        )}
        <div className="congratulations">
          {this.state.showGoodMessage && this.state.right < 3 && (
            <GreetingMessage />
          )}
        </div>
        <div className="congratulations">
          {this.state.showBadMessage && this.state.tries > 0 && (
            <Tries triesLeft={this.state.tries} />
          )}
        </div>

        <div className="containerMath">
          <div className="displayMath">
            <div className="mathGame">
              <div className="textGame">
                <div>
                  <h1>Math Mars</h1>
                  <p>Choose the right number!</p>
                </div>
                {this.props.user.role === "teacher" ? (
                  <div className="helpStar">
                    <p>Send this game!</p>
                    <img
                      src="/images/star.png"
                      onClick={() => this.emit()}
                      alt="star"
                    />
                  </div>
                ) : (
                  this.state.star && (
                    <div className="helpStar">
                      <p>Help Here!</p>
                      <img
                        src="/images/star.png"
                        onClick={() => {
                          this.handleHover();
                        }}
                        alt="star"
                      />
                    </div>
                  )
                )}

                {this.state.help && (
                  <div className="aliensRow">
                    {[...Array(this.state.numA + this.state.numB)].map(
                      (e, i) => (
                        <div key={i}>
                          <img
                            className="aliens"
                            src="/images/hint.png"
                            alt="aliens"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <div className="dashInfo">
                <div>
                  <div className="guesState">
                    {this.state.numA} + {this.state.numB} ={" "}
                    <h2 className="ask bounce">{" ? "}</h2>
                  </div>
                </div>

                <div className="dashNumbers">
                  {this.state.nums.map((num, i) => (
                    <div
                      className=" numbers"
                      key={i}
                      onClick={(e) => {
                        this.handleClick(e, num);
                      }}
                    >
                      <h4>{num[0]}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.redirect && <Redirect to="/games" />}
      </div>
    );
  }
}
export default MathMars;
