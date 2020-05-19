import React from "react";
import GreetingMessage from "../tuttiFrutti/GreetingMessage";

class NameCustom extends React.Component {
  state = {
    colors: ["red", "blue", "orange", "green"],
    randomColor: "",
    choiceColors: [
      ["red", "#ff0000", "/images/memo/red.png"],
      ["blue", "#1261a0", "/images/memo/blue.png"],
      ["orange", "#fb8e3c", "/images/memo/orange.png"],
      ["green", "#008000", "/images/memo/green.png"],
    ],
    isColoured: false,
    showGoodMessage: false,
  };
  pickRandomColor = () => {
    this.setState({
      randomColor: this.state.colors[
        Math.floor(Math.random() * this.state.colors.length)
      ],
    });
  };
  handleClick = (e, el) => {
    if (el[0] === this.state.randomColor) {
      setTimeout(
        function () {
          this.setState({ showGoodMessage: true });
        }.bind(this),
        1000
      );

      this.setState({
        isColoured: true,
      });
    } else {
    }
  };
  handleUpdate = () => {
    this.setState({
      isColoured: false,
      randomColor: this.state.colors[
        Math.floor(Math.random() * this.state.colors.length)
      ],
      showGoodMessage: false,
    });
  };
  componentDidMount = () => {
    this.pickRandomColor();
  };
  render() {
    return (
      <div className="nameCustom">
        <h3 className="gameInstructions">
          In the meantime, let´s play! Color your name
        </h3>{" "}
        <h2
          className=""
          style={{
            color: this.state.randomColor,
            fontFamily: "Barrio,cursive",
          }}
        >
          {this.state.randomColor}
        </h2>
        {/* <div className="titleCustom">
         
        </div> */}
        <h1
          style={{
            color: this.state.isColoured ? this.state.randomColor : " black",
            margin: "0.5rem",
          }}
        >
          {this.props.user.username ? this.props.user.username : "Kinder Class"}
        </h1>
        <div className="colorsRow">
          {this.state.choiceColors.map((el, i) => {
            return (
              <div
                key={i}
                className="colorStar"
                onClick={(e) => {
                  this.handleClick(e, el);
                }}
              >
                <img src={el[2]} alt="choiceColor" />
              </div>
            );
          })}
        </div>
        <div className="congratulations">
          {this.state.showGoodMessage && (
            <GreetingMessage
              playAgain={true}
              handleUpdate={this.handleUpdate}
            />
          )}
        </div>
      </div>
    );
  }
}
export default NameCustom;
