import React from "react";
import { handleUpload } from "../services/cloudinary";

class Profile extends React.Component {
  state = {
    imageUrl: this.props.user.image_url,
    uploadOn: false,
    showUpload: false,
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
  handleClick = () => {
    this.setState({
      showUpload: !this.state.showUpload,
    });
  };
  handleHistory = () => {
    this.setState({
      showUpload: !this.state.showUpload,
    });
  };
  render() {
    return (
      <div className="profilePicture">
        <img src="/images/profile.png" alt="profile" />
        {this.state.imageUrl && (
          <img className="imageUser" src={this.state.imageUrl} alt="profile" />
        )}
        <div
          className="uploadImage"
          onClick={() => {
            this.handleClick();
          }}
        >
          <img src="/images/starBack2.png" alt="star" />
          <p>Upload your image!</p>
        </div>
        {this.state.showUpload && (
          <div className="congratulations">
            <div className="modalUpload">
              <input type="file" onChange={(e) => this.handleFileUpload(e)} />
              <br />
              <button
                onClick={() => {
                  this.handleHistory();
                }}
              >
                Ok!
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Profile;
