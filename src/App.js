import React, { Component } from "react";
import Spinner from "./Spinner";
import Image from "./Image";
import Button from "./Button";
import { API_URL } from "./config";
import "./App.css";

export default class App extends Component {
  state = {
    uploading: false,
    images: []
  };

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new formData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${API_URL}/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images
        });
      });
  };

  removeImage = id => {
    this.setState({
      images: this.setState.images.filter(image => image.public_id !== id)
    });
  };

  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Image images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}
