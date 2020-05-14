import React from "react";
import shuffle from "../services/tuttiFrutti";
import { Animated } from "react-animated-css";

class TuttiFrutti extends React.Component {
  state = {
    cards: [
      {
        letter: "B",
        name: "Banana",
        image: "/images/banana.jpg",
        category: "Fruits",
      },
      {
        letter: "B",
        name: "Bee",
        image: "/images/bee.jpg",
        category: "Animal",
      },
      {
        letter: "B",
        name: "Bear",
        image: "/images/bear.jpg",
        category: "Animal",
      },
      {
        letter: "D",
        name: "Donut",
        image: "/images/donut.jpg",
        category: "Food",
      },
      {
        letter: "D",
        name: "Duck",
        image: "/images/duck.jpg",
        category: "Animal",
      },
      {
        letter: "D",
        name: "Dog",
        image: "/images/dog.jpg",
        category: "Animal",
      },
      {
        letter: "P",
        name: "Pizza",
        image: "/images/pizza.jpg",
        category: "Food",
      },
      {
        letter: "P",
        name: "Plane",
        image: "/images/plane.jpg",
        category: "Toys",
      },
      {
        letter: "P",
        name: "Pig",
        image: "/images/pig.jpg",
        category: "Animal",
      },
      {
        letter: "C",
        name: "Carrot",
        image: "/images/carrot.jpg",
        category: "Fruits",
      },
      {
        letter: "C",
        name: "Car",
        image: "/images/car.jpg",
        category: "Toys",
      },
      {
        letter: "C",
        name: "Cow",
        image: "/images/cow.jpg",
        category: "Animal",
      },
    ],
    currentLetter: "C",
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
    let newArray = [];
    newArray = shuffle([...this.state.cards]);
    this.setState({
      cards: newArray,
      active: !this.state.active,
    });
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
        <button onClick={this.getCards}>click to start</button>
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
export default TuttiFrutti;
