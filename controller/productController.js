const Product = require("../model/ProductModel");
const {
  createProductService,
  updateProductService,
  filterProductOnTitleService,
} = require("../service/productService");
const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function productCreateController() {
  const { title, description, price } = {
    title: "Nikeee",
    description: "nice",
    price: 1500,
  };
  console.log(title);

  if (!isEmpty(title) && !isEmpty(description) && !isEmpty(price)) {
    console.log("here");
    createProductService({ title, description, price });
  }
}

function productUpdateController(_productId) {
  const { title, description, price } = {
    title: "jordan I",
    description: "lorem 3",
  };
  updateProductService(_productId.trim(), {
    title: title === undefined ? null : title.trim(),
    description: description === undefined ? null : description.trim(),
    price: price === undefined ? null : price,
  });
}
function productSearchController() {
  let title = "Nike";
  let product = filterProductOnTitleService(title);
  console.log(product);
}

function deleteProductController(productId) {
  Product.delete(productId);
}
// productCreateController();
productSearchController();
// deleteProductController("5b13324a-0c11-418a-ae59-643aa95ae401");
// productUpdateController("5b13324a-0c11-418a-ae59-643aa95ae401");
