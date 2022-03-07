import React, { Component } from "react";

export default class UseEffectCL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
    };
  }

  componentDidMount() {
    document.title = `Current State is ${this.state.value}`;
  }

  componentDidUpdate() {
    document.title = `Current State is ${this.state.value}`;
  }

  componentWillUnmount() {
    document.title = "Unmounting";
  }

  render() {
    return (
      <div className="minutes ">
        <p>Current State : {this.state.value} </p>
        <button
          onClick={() => {
            this.setState({ value: !this.state.value });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}
