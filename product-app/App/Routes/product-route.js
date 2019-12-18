module.exports = (app) => {
    const prod = require('../Controller/prod-controller');
    //create a new product
    app.post('/productstructure', prod.create);
    //retrieve  products
    app.get('/productstructure', prod.findAll);
    //update the products
    app.put('productstructure/:productid', prod.update);
    //delete the products
    app.delete('/productstructure/:productid', prod.delete);
}