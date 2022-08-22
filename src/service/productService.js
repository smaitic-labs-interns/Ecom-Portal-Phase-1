const {
  createProduct,
  updateProduct,
  deleteProduct,
  filterOneProductOnSearch,
} = require("../database/ProductDB");
const Product = require("../model/ProductModel");
const { isEmpty } = require("../utils/validator");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
const { listenerCount } = require("../model/ProductModel");
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
mongoConnect();

async function productCreateService(title, description, quantity, price) {
  try {
    let product = new Product({
      title: title,
      description: description,
      quantity: quantity,
      price: price,
    });
    console.log(product, "check product");
    if (
      !isEmpty(title) &&
      !isEmpty(description) &&
      !isEmpty(quantity) &&
      !isEmpty(price)
    ) {
      await createProduct(product);
    }
  } catch (error) {
    throw error;
  }
}

async function productUpdateService(id, title, description,price, quantity) {
  var valid_id = mongoose.Types.ObjectId.isValid(id);
  if (valid_id) {
    try {
      const productID = await Product.exists({ _id: id });
      console.log(productID, "search");
      if (productID) {
        await updateProduct(id, title, description, price,quantity);
        return;
      } else {
        console.log("productId does not exists ");
      }
    } catch (error) {
      throw error;
    }
  }
  console.log("provide valid id");
}
async function productSearchService(search) {
  try {
    let product = await filterOneProductOnSearch(search);
    console.log("query result", product);
  } catch (error) {
    throw error;
  }
}

function deleteProductService(productId) {
  deleteProduct(productId);
}
// productCreateService('fabric fix', 'clothing brand', 50,'2000');
// productSearchService('r');
// deleteProductService("62f7a9d2728987dad2b847f9");
productUpdateService("63024807fd6003cadef355e1", "nice clothes", "me");
