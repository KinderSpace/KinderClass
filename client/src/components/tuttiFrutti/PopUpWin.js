import React from "react";
import { Animated } from "react-animated-css";

class PopUpWin extends React.Component {
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
          <h1>You are awesome!</h1>
          <img className="starSign" src="\images\star1.png" alt="star" />

          <button className="buttonWin" onClick={this.props.buttonMethod}>
            Try again
          </button>
        </div>
      </Animated>
    );
  }
}
export default PopUpWin;
