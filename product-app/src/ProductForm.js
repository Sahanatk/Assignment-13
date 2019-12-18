import React, { Component } from 'react'
// import { json } from 'body-parser'
// import { response } from 'express'

const RESET_VALUES ={
                        id: '',
                        product:{
                                productid:'0',
                                category: '', 
                                price: '',
                                name: '',
                                instock:''
                                }
                    };

class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {}
        }
    }
        
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
    
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

    handleSave(e) {
        fetch('http://localhost/3000/product/create/', {
            method:'post',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                id:this.RESET_VALUES.id++,
                productid:this.RESET_VALUES.productid,
                category:this.RESET_VALUES.category,
                price:this.RESET_VALUES.price,
                name:this.RESET_VALUES.name,
                instock:this.RESET_VALUES.instock
            })
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        this.props.onSave(this.state.product);
        // reset the form values to blank after submitting
        this.setState({
            product: Object.assign({}, RESET_VALUES), 
            errors: {}
        })
        // prevent the form submit event from triggering an HTTP Post
        e.preventDefault()
    }

    render () {
        return (
            <form>
                <h4>Add a new product</h4>
                <p>
                    <label>Product Id <br /> 
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.product.productid} /></label>
                </p>
                <p>
                    <label>Name <br /> 
                    <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.product.name} /></label>
                </p>
                <p>
                    <label>Category <br /> 
                    <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.product.category} /></label>
                </p>
                <p>
                    <label>Price <br /> 
                    <input type="text" class="form-control" name="price" onChange={this.handleChange} value={this.state.product.price} /></label>
                </p>
                <p>
                    <label>In Stock <br /> 
                    <input type="text" class="form-control" name="category" onChange={this.handleChange} value={this.state.product.instock} /></label>
                </p>
                <input type="submit" class="btn btn-info" value="Save" onClick={this.handleSave}></input>
            </form>
        )
    }
}

export default ProductForm