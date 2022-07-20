const Product = require("../model/ProductModel");
const {
  createProductService,
  updateProductService,
} = require("../service/productService");
const { isEmpty } = require("../utils/validator");
require('dotenv').config({path: "../.env"})

function productSearchController() {
  let title = "jo";
  let product = Product.filterOne(title);
  console.log(product);
}

function productCreateController() {
  const { title, description, price } = {
    title: "louis vuitton",
    description: "lorem",
    price: 1500,
  };
  console.log(title);

  if (!isEmpty(title) && !isEmpty(description) && !isEmpty(price)) {
    console.log("here");
    createProductService({ title, description, price });
  }
}

function productUpdateController(_title) {

  const { title, description, price } = {
    title: "jordan I",
    description: "lorem 3",
  };
  updateProductService(_title.trim(), {
    title: title === undefined ? null : title.trim(),
    description: description === undefined ? null : description.trim(),
    price: price === undefined ? null : price,
  });
}
function deleteProductController() {
  Product.delete("jordan");
}
productCreateController();
// productSearch();
// deleteProduct();
// productUpdateController("jordan I")
