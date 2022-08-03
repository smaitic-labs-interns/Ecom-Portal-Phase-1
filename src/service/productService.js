const {
  createProduct,
  filterOneProductOnTitle,
  updateProduct,
  deleteProduct,
} = require("../database/ProductDB");
const UserSchema = require("../model/ProductModel");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function productCreateService(title, description, price, quantity) {
  try {
    let product = new UserSchema({
      title: "lambo",
      description: "car",
      quantity: 10,
      price: 5400241,
    });
    // console.log(title);

    if (
      !isEmpty(title) &&
      !isEmpty(description) &&
      !isEmpty(price) &&
      !isEmpty(quantity)
    ) {
      createProduct(product);
    }
  } catch (error) {
   throw error
  }
}

function productUpdateService(_productId) {
  try {
    const { title, description, price } = {
      title: "newone",
      description: "lorem 3",
    };
    updateProduct(_productId.trim(), {
      title: title === undefined ? null : title.trim(),
      description: description === undefined ? null : description.trim(),
      price: price === undefined ? null : price,
    });
    console.log("updated successfully");
  } catch (error) {
    throw error
  }
}
async function productSearchService() {
  let search = "car";
  let product = await filterOneProductOnTitle(search);
  console.log("query result", product);
}

function deleteProductService(productId) {
  deleteProduct(productId);
}
productCreateService();
// productSearchService();
// deleteProductService("67434be2-d9d4-40df-a496-643e07951e45");
// productUpdateService("67434be2-d9d4-40df-a496-643e07951e45");
