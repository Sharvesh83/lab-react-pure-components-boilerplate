import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }
  };

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  componentDidMount() {
    console.log('This is Pure Component');
  }

  render() {
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Set Toggle</button>
      </div>
    );
  }
}

export default PureCounterComponent;
