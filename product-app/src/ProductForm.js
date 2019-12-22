import React, { Component } from 'react'
import Axios from 'axios';
//import { json } from 'body-parser';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
                productid:'',
                category: '', 
                price: '',
                name: '',
                instock:'' 
            }
    }
    handleChange(e){
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product : prevState.product }
        })
    }
    handleSave(e) {
        console.log("Handling save")
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault();
        const obj = {
            product: {
                productid:this.state.productid,
                category:this.state.category,
                price:this.state.price,
                name:this.state.name,
                instock:this.state.instock
            }
        };
        //const axios = require('axios');
        Axios.post('http://localhost:4000/product/create',obj)
        .then(res => console.log(res.data));
        this.setState({
            product:{
                productid:'',
                category: '', 
                price: '',
                name: '',
                instock:''
            }
        })
    }

    render () {
        return (
            <form>
                <h4>Add a new product</h4>
                <p>
                    <label>Product Id <br /> 
                    <input type="text" class="form-control" name="productid" onChange={this.handleChange} value={this.state.productid} /></label>
                </p>
             
                <p>
                    <label>Category <br /> 
                    <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.category} /></label>
                </p>
              
                <p>
                    <label>Price <br /> 
                    <input type="text" class="form-control" name="price" onChange={this.handleChange} value={this.state.price} /></label>
                </p>
                <p>
                    <label>Name <br /> 
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.name} /></label>
                </p>
                <p>
                    <label>In Stock <br /> 
                    <input type="text" class="form-control" name="instock" onChange={this.handleChange} value={this.state.instock} /></label>
                </p>
                <input type="submit" class="btn btn-info" value="Save" onClick={this.handleSave}></input>
            </form>
           
        )
    }
}

export default ProductForm