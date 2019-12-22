import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {
  render() {
    const items = this.props.items.map((message, i) => <Item key={i} message={message} />)
    return (
        <h4>{items}</h4>
    );
  }
}

export default ItemList;
