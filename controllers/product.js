const Product = require('../models/product');

module.exports = {

  sayHello: (req, res) => {
    res.send('Hello');
  },

  productCreate: (req, res) => {
      // const product = new Product({
      //   name: req.body.name,
      //   price: req.body.price
      // })
    //   product.save(function (err) {
    //     if (err) {
    //       return next(err);
    //     }
    //     res.send('Product Created successfully')
    //   })
    // }
    console.log(req.body);
  }
}
// exports.product_details = function (req, res) {
//   Product.findById(req.params.id, function (err, product) {
//       if (err) return next(err);
//       res.send(product);
//   })
// };