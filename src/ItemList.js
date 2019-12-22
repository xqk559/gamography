import React, { Component } from 'react';
import Item from './Item'

let item2 = <Item message="2Tax Gold" />;
let item3 = <Item message="3D Baseball" />;
let item4 = <Item message="3D Lemmings" />;
let item5 = <Item message="Test Icicles" />;

let allTheThings = [item2, item3, item4, item5];

class ItemList extends Component {
  render() {
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

export default ItemList;
