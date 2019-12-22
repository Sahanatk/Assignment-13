
import { Component } from "react";
import Axios from 'axios';
class ProductUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product:{
                productid:'',
                category: '', 
                price: '',
                name: '',
                instock:'' 
                }
            }
        }
        componentDidMount(){
            Axios.get('http://localhost:4000/product/get' +this.props.match.params.id)
            .then(res => {
                this.setState ({
                        product:{
                            productid:this.state.productid,
                            category:this.state.category,
                            price:this.state.price,
                            name:this.state.name,
                            instock:this.state.instock
                        }
                });
            })
                .catch(function (error) {
                    console.log(error);
                })
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
            // prevent the form submit event from triggering an HTTP Post
            e.preventDefault();
            const obj = {
                product:{
                    productid:this.state.productid,
                    category:this.state.category,
                    price:this.state.price,
                    name:this.state.name,
                    instock:this.state.instock
                }
            
            };
            Axios.post('http://localhost:4000/product/update' +this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        
           //this.props.onSave(this.state.product);
            // reset the form values to blank after submitting
       
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
                        <label>Name <br /> 
                        <input type="text" class="form-control" name="name" onChange={this.handleChange} value={this.state.name} /></label>
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
                        <label>In Stock <br /> 
                        <input type="text" class="form-control" name="instock" onChange={this.handleChange} value={this.state.instock} /></label>
                    </p>
                    <input type="submit" class="btn btn-info" value="Save" onClick={this.handleSave}></input>
                </form>
            )}

}
export default ProductUpdate;