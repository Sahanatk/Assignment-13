const mongoose = require('mongoose');
const prodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product:{
        productid: Number,
        category: String,
        price: String,
        name: String,
        instock: Boolean
    }
});
module.exports = mongoose.model('prodModel', prodSchema);