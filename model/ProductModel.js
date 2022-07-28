const uuid = require("uuid");
const productId = uuid.v4();

class ProductSchema{
productId;
  productId;
  title;
  description;
  price;
  constructor({ title, description, price }) {
    this.productId = productId;
    this.title = title;
    this.description = description;
    this.price = price;
  }
  toJson(){ 
    return {
      productId: this.productId,
      title: this.title,
      description: this.description,
      price: this.price,
    }
  }
}

module.exports = ProductSchema

  


// const Product = require("./ProductModel");

// exports.createProductService = ({ title, description, price }) => {
//   let product = new Product({
//     title,
//     description,
//     price,
//   });
//   Product.create(product.toJson());
// };


// exports.updateProductService = (_title, { title, description, price }) => {
//   console.log(title);
//   Product.update(_title, { title, description, price });
// };

// exports.deleteProductService = (title) => {
//   Product.delete(title);
// };

// exports.listProductService = () => {
//   return Product.selectAll();
// };

// exports.getProductService = (title) => {
//   return Product.selectOne(title);
// };

// exports.filterProductOnTitleService = (title) => {
//   return Product.filterOne(title);
// };
