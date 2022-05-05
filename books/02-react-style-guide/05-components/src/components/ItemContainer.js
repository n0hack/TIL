import React, { Component } from 'react';
import ItemList from './ItemList';
import MainTitle from './MainTitle';

class ItemContainer extends Component {
  constructor() {
    super();
    this.state = { items: ['item1', 'item2', 'item3'] };
  }

  handleUpdateFlag = () => {
    const nextState = { items: this.state.items.concat('AAA') };
    this.setState(nextState);
  };

  render() {
    return (
      <div>
        <MainTitle text="My Item Page" url="https://www.example.com" />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default ItemContainer;
