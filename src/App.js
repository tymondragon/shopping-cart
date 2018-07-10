import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js'
import CartItems, { cartItemsList } from './CartItems.js'
import { products } from './products.js'
import AddItem from './AddItem.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      shoppingCart : []
    }
  }

  addToCart = (newItem) => {
    let cart = this.state.shoppingCart
    let array = this.state.products.filter(product => newItem.products === product.name)
    let productObj = {
        product: array[0],
        quantity: newItem.quantity
      }

    let cartFiltered = cart.filter(item=>item.product.name === newItem.products)
    if (cartFiltered.length === 1) {
        cartFiltered[0].quantity = Number(cartFiltered[0].quantity) + Number(newItem.quantity)
        this.setState({shoppingCart:cart})
    }
    else {
        cart = [...cart, productObj]
        this.setState({shoppingCart:cart})
      }
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={ this.state.shoppingCart }/>
        <AddItem products={ this.state.products } addToCart={ this.addToCart }/>
        <CartFooter copyright=" 2018"/>
      </div>
    )
  }
}

export default App
