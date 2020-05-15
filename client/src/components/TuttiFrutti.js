import React from "react";
import { Link } from "react-router-dom";

class TuttiFrutti extends React.Component {
  state = {
    letters: ["B", "C", "D", "P"],
  };

  emit = (letter) => {
    this.props.socket.emit("Hello", {
      markus: `/games/tutti-frutti/${letter}`,
    });
  };

  render() {
    return (
      <div>
        {this.state.letters.map((letter, i) => {
          return (
            <div key={i}>
              <Link to={`/games/tutti-frutti/${letter}`}>
                <h1>Play letter {letter}</h1>
              </Link>
              <button onClick={() => this.emit(letter)}>
                Make students play {letter}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default TuttiFrutti;
