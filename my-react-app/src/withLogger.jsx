import React, { Component } from 'react';

const withLogger = (WrappedComponent) => {
  class WithLogger extends Component {
    componentDidMount() {
      console.log(`${WrappedComponent.name} mounted.`);
    }

    componentWillUnmount() {
      console.log(`${WrappedComponent.name} will unmount.`);
    }

    render() {
      return <WrappedComponent logMessage="This message was logged from HOC." {...this.props} />;
    }
  }

  return WithLogger;
};

export default withLogger;
