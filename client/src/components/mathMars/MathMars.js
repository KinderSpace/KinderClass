import React from "react";
import { Link } from "react-router-dom";
import shuffle from "../../services/tuttiFrutti";
import PopUpWin from "../tuttiFrutti/PopUpWin";
import PopUpLose from "../tuttiFrutti/PopUpLose";
import Tries from "../tuttiFrutti/Tries";
import { Redirect } from "react-router-dom";

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

  // emit = (letter) => {
  //   this.props.socket.emit("Hello", {
  //     markus: `/games/tutti-frutti/${letter}`,
  //   });
  // };
  componentDidMount = () => {
    this.startTheGame();
  };
  handleClick = (event, num) => {
    if (this.state.tries === 1)
      this.setState({
        showBadMessage: false,
      });
    if (num[0] === this.state.numA + this.state.numB) {
      this.setState({
        score: this.state.score + 50,
        right: this.state.right + 1,
      });
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
  handleRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  handleHover = () => {
    this.setState({
      help: true,
      star: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.tries < 1 && (
          <div className="congratulations">
            <PopUpLose buttonMethod={this.handleRedirect} />
          </div>
        )}
        {this.state.right === 1 && (
          <div className="congratulations">
            <PopUpWin buttonMethod={this.handleRedirect} />
          </div>
        )}
        <div className="congratulations">
          {this.state.showBadMessage && <Tries triesLeft={this.state.tries} />}
        </div>

        <div className="containerMath">
          <div className="displayMath">
            <div className="mathGame">
              <div className="textGame">
                <div>
                  <h1>Math Mars</h1>
                  <p>Choose the right number!</p>
                </div>
                {this.state.star && (
                  <div className="helpStar">
                    <p>Help Here!</p>
                    <img
                      src="/images/star.png"
                      onClick={() => {
                        this.handleHover();
                      }}
                    />
                  </div>
                )}

                {this.state.help && (
                  <div className="aliensRow">
                    {[...Array(this.state.numA + this.state.numB)].map(
                      (e, i) => (
                        <div key={i}>
                          <img className="aliens" src="/images/hint.png" />
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
