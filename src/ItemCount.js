import React, { Component } from 'react';

class ItemCount extends Component {
  render() {
    return (
      <h4>There are {this.props.count} items on your list</h4>
    );
  }
}

export default ItemCount;
