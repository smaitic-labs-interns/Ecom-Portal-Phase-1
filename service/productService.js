const {
  createProduct,
  deleteProduct,
  updateProduct,
  selectAllProduct,
  selectOneProduct,
  filterOneProduct,
} = require("../database/ProductDB");

const ProductSchema = require("../model/ProductModel");

exports.createProductService = ( title, description, price ) => {
  let product = new ProductSchema({
    title,
    description,
    price,
  });
  createProduct(product.toJson());
};

exports.updateProductService = (_title, { title, description, price }) => {
  console.log(title);
  updateProduct(_title, { title, description, price });
};

exports.deleteProductService = (title) => {
  deleteProduct(title);
};

exports.listProductService = () => {
  return selectAllProduct();
};

exports.getProductService = (title) => {
  return selectOneProduct(title);
};

exports.filterProductOnTitleService = (title) => {
  return filterOneProduct(title);
};
