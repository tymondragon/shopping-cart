import React, { Component } from 'react';
const CartFooter = (props)=> {
  return <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">&copy;<span>{props.copyright}</span></a>
         </nav>
}

export default CartFooter