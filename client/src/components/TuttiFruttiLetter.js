import React from "react";
import shuffle from "../services/tuttiFrutti";
import { Animated } from "react-animated-css";
import axios from "axios";

class TuttiFruttiLetter extends React.Component {
  state = {
    cards: [],
    currentLetter: "",
    score: 0,
    active: false,
    tries: 3,
    showGoodMessage: false,
    isVisible: false,
  };

  handleClick = (event, letter) => {
    if (letter === this.state.currentLetter) {
      console.log("good click");
      this.setState({
        score: this.state.score + 10,
        showGoodMessage: true,
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

  render() {
    // console.log(this.state.cards)
    return (
      <div>
        {this.state.tries === 0 && (
          <Animated
            animationIn="shake"
            animationOut="bounceOutUp"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <div>
              <h1> you lost! </h1>
            </div>
          </Animated>
        )}
        {this.state.active && (
          <div>
            <h1>
              Score : {this.state.score} Tries : {this.state.tries}
            </h1>
            <div className="dashBoard">
              {this.state.cards.map((card, i) => {
                return (
                  <div key={i}>
                    <img
                      className="cardsImg"
                      src={card.image}
                      onClick={(e) => {
                        this.handleClick(e, card.letter);
                      }}
                    />
                  </div>
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
      </div>
    );
  }
}
export default TuttiFruttiLetter;
