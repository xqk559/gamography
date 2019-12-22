import React, { Component } from 'react';

class AppJumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default AppJumbotron;
