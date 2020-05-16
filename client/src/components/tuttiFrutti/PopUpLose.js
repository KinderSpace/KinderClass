import React from "react";
import { Animated } from "react-animated-css";

class PopUpLose extends React.Component {
  state = {
    isVisible: false,
  };
  render() {
    return (
      <Animated
        animationIn="fadeInDownBig"
        animationOut="zoomOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="popUpWin">
          <img className="starSign" src="\images\star1.png" alt="star" />
          <h1>Try again! You can do this!! </h1>
          <button className="buttonWin" onClick={this.props.buttonMethod}>
            Try again
          </button>
        </div>
      </Animated>
    );
  }
}
export default PopUpLose;
