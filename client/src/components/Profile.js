import React from "react";
import { handleUpload } from "../services/cloudinary";

class Profile extends React.Component {
  state = {
    imageUrl: this.props.user.image_url,
    uploadOn: false,
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.setState({ uploadOn: true });
    handleUpload(uploadData)
      .then((response) => {
        this.setState({ imageUrl: response.image_url, uploadOn: false });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <div className="profilePicture">
        <img src="/images/profile.png" alt="profile" />
        {this.state.imageUrl && (
          <img className="imageUser" src={this.state.imageUrl} alt="profile" />
        )}
        <input type="file" onChange={(e) => this.handleFileUpload(e)} />
      </div>
    );
  }
}
export default Profile;
