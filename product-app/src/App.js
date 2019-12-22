
import React, { Component } from 'react'
import Products from './Products'
class App extends Component{
  state = {
    products : []
  }
  addProdToState = (prod) => {
    this.setState(prevState => ({
      products : [...prevState.products,prod]
    }))
  }

render() {
    return (
      <div>
        <Products></Products>
      </div>
    );
  }
}
export default App;



    
   
  

 

