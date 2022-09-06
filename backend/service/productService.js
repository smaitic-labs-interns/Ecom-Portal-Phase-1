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
const mongoose = require('mongoose')
require("dotenv").config({ path: "../.env" });

exports.productCreateService= async (title, description, quantity, price) => {
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

exports.productUpdateService= async (productId, quantity,price) => {
  var valid_id = mongoose.Types.ObjectId.isValid(productId);
  if (valid_id) {
    try {
      const existsProduct = await Product.exists({ _id: productId });
      console.log(existsProduct, "search");
      if (existsProduct) {
        await updateProduct(productId,quantity,price);
        return;
      } else {
        console.log("productId does not exists ");
      }
    } catch (error) {
      throw error;
    }
  }
  console.log("provide valid productId");
}
exports.productSearchService = async (search) => {
  try {
    let product = await filterOneProductOnSearch(search);
    console.log("query result", product);
    return product
  } catch (error) {
    throw error;
  }
}

exports.productDeleteService = (productId) => {
   var valid_id = mongoose.Types.ObjectId.isValid(productId);
  if (valid_id) {
  deleteProduct(productId);
  }
  console.log('provide valid product id');
}
// productCreateService('fabric fix', 'clothing brand', 50,'2000');
// productSearchService('r');
// deleteProductService("62f7a9d2728987dad2b847f9");
// productUpdateService("63024807fd6003cadef355e1", "nice clothes", "me");
