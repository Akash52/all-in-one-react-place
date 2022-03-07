import React, { Component } from 'react';

export default class CL_Redux extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className='counter'>
        <div className='box'>
          <button onClick={this.increment}>+</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
