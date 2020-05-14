import React from "react";
import { Link } from "react-router-dom";

class TuttiFrutti extends React.Component {
  state = {
    letters: ["B", "C", "D", "P"],
  };
  render() {
    return (
      <div>
        {this.state.letters.map((letter, i) => {
          return (
            <div key={i}>
              <Link to={`/games/tutti-frutti/${letter}`}>
                <h1>Go to letter {letter}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default TuttiFrutti;
