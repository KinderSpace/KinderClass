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
        <div>
          <h1>Hello from lose </h1>
          <button onClick={this.props.buttonMethod}>Try again</button>
        </div>
      </Animated>
    );
  }
}
export default PopUpLose;
