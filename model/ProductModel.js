const Product = require("./ProductModel");

exports.createProductService = ({ title, description, price }) => {
  let product = new Product({
    title,
    description,
    price,
  });
  Product.create(product.toJson());
};


exports.updateProductService = (_title, { title, description, price }) => {
  console.log(title);
  Product.update(_title, { title, description, price });
};

exports.deleteProductService = (title) => {
  Product.delete(title);
};

exports.listProductService = () => {
  return Product.selectAll();
};

exports.getProductService = (title) => {
  return Product.selectOne(title);
};

exports.filterProductOnTitleService = (title) => {
  return Product.filterOne(title);
};
