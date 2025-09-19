import React, { Component } from "react";
import defaultImf from "./dog.png";
import styles from "./AnimalSlider.module.scss";

class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defaultImf,
      caption: "This is some dog)",
    };
    this.id = null;
  }
  componentDidMount() {
    // this.id = setInterval(this.imgRender(), 2000);
    this.imgRender();
  }
  componentDidUpdate() {
    this.id = setInterval(this.imgRender(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
  imgRender() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((responsev) => responsev.json())
      .then((data) => this.setState({ imgSrc: data.message }))
      .catch((err) => console.log("err :>> ", err));
  }
  render() {
    const { imgSrc, caption } = this.state;
    return (
      <figure className={styles.sliderContainer}>
        <img src={imgSrc} alt="dog" />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}

export default AnimalSlider;
