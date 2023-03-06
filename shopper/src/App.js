import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import { items } from './static-data';
import CartPage from './CartPage';
import Summary from './Summary';


class App extends React.Component {

  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index)=> {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item)=> {
    
    this.setState({
      cart: [...this.state.cart, item.id]
    })
    
    
  }


  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      //take the left half and concatenate it with right half
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })

  }


  renderComponent() {
    switch(this.state.activeTab) {
      default:
      case 0: 
      return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>
      case 1: 
      return this.renderCart();
    }
  }

  renderCart() {
    //Count how many of the items is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) =>{ 
      itemCounts[itemId] = itemCounts[itemId] || 0
      itemCounts[itemId]++
      console.log(itemCounts)
      return itemCounts
    }, {})


    //create an array of objects
    let cartItems = Object.keys(itemCounts).map(itemId => {
      //find the item by its id
      var item = items.find(item =>
        item.id === parseInt(itemId, 10)
        );

      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

    return (
      <div>
        <CartPage items={cartItems}
          onAddOne={this.handleAddToCart}
          onRemoveOne={this.handleRemoveOne}/>
      </div>
    )
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className='App'>
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} items={this.state.cart}/>
        <main className='App-content'>
          {this.renderComponent()}
        </main>
      </div>
    )
  }
}

export default App;
