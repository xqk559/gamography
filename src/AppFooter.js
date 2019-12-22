import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <div className="text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </div>
    );
  }
}

export default AppFooter;
