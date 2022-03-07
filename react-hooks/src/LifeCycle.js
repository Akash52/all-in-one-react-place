import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Akash",
    };
    console.log("App constructor LifeCycle B");
  }

  componentDidMount() {
    console.log("App componentDidMount LifeCycle B");
  }

  render() {
    return <div>LifeCycle B</div>;
  }
}
