import React from "react";
import { Link } from "react-router-dom";

class TuttiFrutti extends React.Component {
  state = {
    letters: [
      ["B", "/images/letterb.png"],
      ["C", "/images/letterc.png"],
      ["P", "/images/letterp.png"],
      ["D", "/images/letterd.png"],
    ],
  };

  emit = (letter) => {
    this.props.socket.emit("Hello", {
      newGame: `/games/tutti-frutti/${letter[0]}`,
    });
  };

  render() {
    return (
      <div className="gameIntro">
        <h1>Tutti Frutti</h1>
        <p>Choose a letter to start the game!</p>
        <div className="displayLetters">
          {this.state.letters.map((letter, i) => {
            return (
              <div className="choiceLetter" key={i}>
                <Link to={`/games/tutti-frutti/${letter[0]}`}>
                  <img src={letter[1]} alt={letter[0]} />
                </Link>
                <button onClick={() => this.emit(letter)}>
                  Send this game
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default TuttiFrutti;
