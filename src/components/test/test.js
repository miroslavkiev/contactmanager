import React, { Component } from "react";

class Test extends Component {
  state = { test: "test" };

  componentDidMount() {
    console.log(`Component Did Mount!`);
  }

  UNSAFE_componentWillMount() {
    console.log(`Component Will Mount!`);
  }

  componentDidUpdate() {
    console.log(`Component Did Update!`);
  }

  UNSAFE_componentWillUpdate() {
    console.log(`Component Will Update!`);
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log(`componentWillReceiveProps`);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { test: "Something!" };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <h1>Test component</h1>
      </div>
    );
  }
}

export default Test;
