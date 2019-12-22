import React, { Component } from 'react'
import ProductRow from './ProductRow'
import axios from 'axios'

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {rows : []};
        this.tabRow = this.tabRow.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:4000/product/get/')
        .then(res => {
            console.log("In component will mount");
            console.log(res);
            this.setState({ rows : res.data});
            console.log("In component will mount row0: ");
            console.log(this.state.rows[0]);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
  
    tabRow(){
        console.log("tabRow called ");
        console.log("Logging a product in tabRow: " + this.state.rows[0]);
        return this.state.rows.map(function(object,i) {
            console.log("Logging data inside map of tabrow i: " + i)
            console.log(object);
            return <ProductRow obj= {object.product} key={i} />; 
        });
    }
    handleDestroy(id) {
        this.props.onDestroy(id)
    }
    render () {
        return (
            <div>
                <table class="table table-striped table-sm" data={this.state.data}>
                    <thead class="thead-dark">
                        <tr>
                            <th>Productid</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable