import React from "react";

class TuttiFruttiLetter extends React.Component {
  render() {
    // console.log(this.state.cards)
    return (
      <div className="landingContainer">
        <div className="displayBoxes">
          <div>
            <h1>Welcome to Kinder Class</h1>
            <h3>A galaxy of learning and fun!</h3>
          </div>
          {/* <div className="landingBox">
            <h4>For teachers</h4>
            <p>Send games to your classroom in real time</p>
            <p>Keep track of their learning development</p>
          </div>
          <div className="landingBox">
            <h4>For kids</h4>
            <p>Play and learn in a safe and fun space</p>
          </div> */}
          <img className="movingStar" src="/images/star.png" alt="star" />
          <img className="movingOvni" src="/images/hint.png" alt="ovni" />
          <img
            className="movingRocket bounce"
            src="/images/star.png"
            alt="rocket"
          />
        </div>
      </div>
    );
  }
}
export default TuttiFruttiLetter;
