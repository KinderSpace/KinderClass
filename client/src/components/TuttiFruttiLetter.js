import React from "react";
import shuffle from "../services/tuttiFrutti";
import { Animated } from "react-animated-css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class TuttiFruttiLetter extends React.Component {
  state = {
    cards: [],
    currentLetter: "",
    redirect: false,
    score: 0,
    active: false,
    tries: 3,
    right: 0,
    showGoodMessage: false,
    isVisible: false,
    animationIn : "",
    animationOut : "",
  };

  handleClick = (event, letter) => {
    if (letter === this.state.currentLetter) {
      console.log("good click");
      this.setState({
        score: this.state.score + 10,
        showGoodMessage: true,
        right: this.state.right + 1,
        isVisible: true,
      });
      setTimeout(
        function () {
          this.setState({ showGoodMessage: false });
        }.bind(this),
        2000
      );
    } else if (letter !== this.state.currentLetter) {
      console.log("bad click");
      this.setState({
        score: this.state.score - 10,
        tries: this.state.tries - 1,
        animationIn : "shake",
        animationOut : "wobble",
      });
    }
  };

  getCards = () => {
    axios.get("/api/games/tutti-frutti").then((cardsFound) => {
      const letter = this.props.match.params.letter;
      console.log(letter);
      this.setState({
        currentLetter: letter,
        cards: shuffle(cardsFound.data.cards),
        active: !this.state.active,
      });
    });
  };

  componentDidMount = () => {
    this.getCards();
  };
  handleRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  componentWillUnmount() {
    this.active = false;
  }
  render() {
    // console.log(this.state.cards)
    return (
      <div>
        {this.state.tries <= 0 && (
          <div>
            <Animated
              animationIn="shake"
              animationOut="bounceOutUp"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <div>
                <h1> you lost! </h1>
                <button onClick={this.handleRedirect}>Try again</button>
              </div>
            </Animated>
          </div>
        )}
        {this.state.right === 3 && (
          <div>
            <Animated
              animationIn="shake"
              animationOut="bounceOutUp"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              <div>
                <h1> you win! </h1>
                <button onClick={this.handleRedirect}>Try again</button>
              </div>
            </Animated>
          </div>
        )}
        {this.state.active && (
          <div>
            <h1>
              Score : {this.state.score} Tries : {this.state.tries}
            </h1>
            <div className="dashBoard">
              {this.state.cards.map((card, i) => {
                return (
                  <Animated
                  animationIn={this.state.animationIn}
                  animationOut={this.state.animationOut}
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <div className="cardsImg" key={i}>
                    <img
                      className="wrongImg"
                      src={card.image}
                      onClick={(e) => {
                        this.handleClick(e, card.letter);
                      }}
                    />
                  </div>
            </Animated>
                 
                );
              })}
            </div>
          </div>
        )}
        {this.state.showGoodMessage && (
          <Animated
            animationIn="shake"
            animationOut="bounceOutUp"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <div>
              <h1> Well Done! </h1>
            </div>
          </Animated>
        )}
        {this.state.redirect && <Redirect to="/games/tutti-frutti" />}
    
      </div>
    );
  }
}
export default TuttiFruttiLetter;
