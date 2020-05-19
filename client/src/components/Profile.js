import React from "react";
import { Animated } from "react-animated-css";

class Profile extends React.Component {
  render() {
    return (
      <div className="profilePicture">
        <img src="/images/profile.png" alt="profile" />
        <img className="imageUser" src="/images/fran.jpg" alt="profile" />
      </div>
    );
  }
}
export default Profile;
