import React from "react";
import { Animated } from "react-animated-css";

class Tries extends React.Component {
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
        <div className="badMessage">
          {this.props.triesLeft < 2 && (
            <h1>You have {this.props.triesLeft} trie left!</h1>
          )}
          {this.props.triesLeft > 1 && (
            <h1>You have {this.props.triesLeft} tries left!</h1>
          )}
        </div>
      </Animated>
    );
  }
}
export default Tries;
