import React, {Component} from 'react'

class AddItem extends Component {
  constructor (props){
    super(props)
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({[e.target.className]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addToCart(this.state)
  }

  render () {
  let productItems = this.props.products.map(item => <option key={item.id} value={this.props.name}>{item.name}</option>)
  return (
      <div className="container">
          <div className="row">
            <div className="row">
              <p>
                <label>
                  Total Price: ${ this.props.total() }
                </label>
              </p>
            </div>
            <form className="form-inline" onSubmit ={ this.onSubmit }>
              <div className="row">
                <label>
                  Quantity:
                  <input type="number"  onChange={ this.onChange } className="quantity"/>
                </label>
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref" placeholder="First Select an option...">Products:</label>
                <select className="products" onChange={ this.onChange }>
                  { productItems }
                </select>
              </div>
              <button className="btn btn-primary" type="submit">Button</button>
            </form>
          </div>
        </div>
      )
  }
}

export default AddItem