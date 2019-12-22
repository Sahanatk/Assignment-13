import React, { Component } from 'react'
import Axios from 'axios';

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.state = {rows : []};
        this.update = this.update.bind(this)
        this.destroy = this.destroy.bind(this)
    }
    update() {
        this.props.update(this.props.product.id);
    }
    destroy(e) {
        const idParam = this.props.obj._id;
        Axios.delete('http://localhost:4000/product/delete/' + idParam)
        .then(res => {
            this.setState({ rows : res.data})
          
        })
        .catch(err =>console.log(err))
     }
     handleDestroy(_id) {
        this.props.onDestroy(_id)
    }
    render () {
        return (
            <tr>
                <td>{this.props.obj.productid}</td>
                <td>{this.props.obj.category}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.instock}</td>
                <td class="text-right"><button onClick={this.update} class="btn btn-info">Edit</button></td>
                <td class="text-right"><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
            </tr>
        )
    }
}

export default ProductRow