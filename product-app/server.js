
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const conn_url = "mongodb+srv://sahanatk:desu786@nodecluster-11d3n.mongodb.net/test?retryWrites=true&w=majority";
const prodModel = require('./App/Models/prodmodel');
const cors = require('cors');
mongoose.Promise = global.Promise;
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000, () => {
    mongoose.connect(conn_url, { useNewUrlParser: true,useUnifiedTopology: true}, (error,client) => {
            if(error) {
                throw error;
            }
            console.log("connected to mongoose");
    });
});
//create product
app.post('/product/create', (req,res,next) => {
    console.log("Post call received");
    const receivedProd = req.body.product;
    const prod = new prodModel({
        _id: new mongoose.Types.ObjectId(),
        product: {
            productid: receivedProd.productid,
            category: receivedProd.category,
            price:receivedProd.price ,
            name: receivedProd.name,
            instock: receivedProd.instock
        }
    });
    prod.save()
    .then(res => {
        console.log(res);
        console.log(req.method);
        console.log(req.path);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: "created data successfully",
        createdProd: prod
    });
});
//gets product
app.get("/product/get/",(req,res,next) => {
    console.log("Get call received");
    prodModel.find().exec()
    .then(doc => {
        console.log("From database", doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});
//delete product
app.delete("/product/delete/:id",(req,res,next) => {
    console.log("Delete call received");
    const Id = req.params.id;
    prodModel.remove({ _id: Id })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    });
});
//update product
app.patch("/product/update/:id", (req,res,next) => {
    console.log("Patch call received");
    const receivedProd = req.body;
    const updateOper = {};
    for (const ops of receivedProd) {
        console.log(ops.propName);
        console.log(ops.value);
        updateOper[ops.propName] = ops.value;
    }
    prodModel.findByIdAndUpdate(req.params.id, {product: { $set: updateOper }}, {new: true})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});
