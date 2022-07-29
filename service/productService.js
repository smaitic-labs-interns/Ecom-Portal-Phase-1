const {
  createProductService,
  updateProductService,
  filterProductOnTitleService,
  deleteProductService,
} = require("../service/productService");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function productCreateService() {
  const { title, description, price } = {
    title: "fabric fix",
    description: "Its a new brand name",
    price: 1500,
  };
  // console.log(title);

  if (!isEmpty(title) && !isEmpty(description) && !isEmpty(price)) {
    createProductService(title, description, price);
  }
}

function productUpdateService(_productId) {
  const { title, description, price } = {
    title: "newone",
    description: "lorem 3",
  };
  updateProductService(_productId.trim(), {
    title: title === undefined ? null : title.trim(),
    description: description === undefined ? null : description.trim(),
    price: price === undefined ? null : price,
  });
  console.log("updated successfully");
}
function productSearchService() {
  let title = "q";
  let product = filterProductOnTitleService(title);
  console.log(product);
}

function deleteProductService(productId) {
  deleteProduct(productId);
}
productCreateService();
// productSearchService();
// deleteProductService("49f43cac-f99e-45dc-941d-6271cb1c4b3c");
// productUpdateService("d89f1a25-4bfe-4be8-b5f5-8059c069fbdf");
