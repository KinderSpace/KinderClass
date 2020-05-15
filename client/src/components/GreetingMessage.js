import React from "react";
import { Animated } from "react-animated-css";

class GreetingMessage extends React.Component {
  state = {
    isVisible: false,
  };

  render() {
    return (
      <Animated
        animationIn="rubberBand"
        animationOut="flash"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <div className="greetingMessage">
          <h1>Fantastic!! </h1>
        </div>
      </Animated>
    );
  }
}
export default GreetingMessage;
