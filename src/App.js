import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader.js';
import CartFooter from './CartFooter.js';
import CartItems, { cartItemsList } from './CartItems.js';

class App extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items= { cartItemsList }/>
        <CartFooter copyright=" 2018"/>
      </div>
    );
  }
}

export default App;
