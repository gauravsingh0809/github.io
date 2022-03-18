import React, { Component } from 'react'
import Error from '../404/404';


class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <Error/>
        );
      }
      return this.props.children;
    }
  }

export default ErrorBoundary
