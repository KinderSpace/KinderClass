import React from "react";
import { Link } from "react-router-dom";

class TeacherTutorial extends React.Component {
  render() {
    // console.log(this.state.cards)
    return (
      <div className="teachersTutorial">
        <h4>
          <Link to="/games">Click here to start a game for your students!</Link>
        </h4>

        <h4>
          <Link to="/stats">Check the stats to see their improvements</Link>
        </h4>
      </div>
    );
  }
}
export default TeacherTutorial;
