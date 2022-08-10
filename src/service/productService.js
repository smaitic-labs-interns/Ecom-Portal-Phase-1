const {
  createProduct,
  updateProduct,
  deleteProduct,
  filterOneProductOnSearch,
} = require("../database/ProductDB");
const Product = require("../model/ProductModel");
const { isEmpty } = require("../utils/validator");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
require("dotenv").config({ path: "../.env" });

mongoConnect();
async function productCreateService(title, description, quantity, price) {
  try {
    let product = new Product({
      title: "nike",
      description: "car",
      quantity: "20",
      price: "5401",
    });
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

async function productUpdateService(id) {
  try {
    const { title, description, price, quantity } = {
      title: "new",
      description: "lorem 3",
    };
    var id;
    const productID = await Product.findById(id);
    console.log(productID);
    if (!productID) {
      console.error("productId does not exists ");
    } else {
      await updateProduct(title, description, price, quantity);
      console.log("updated");
    }
  } catch (error) {
    throw error;
  }
}
async function productSearchService(search) {
  let product = await filterOneProductOnSearch(search);
  console.log("query result", product);
}

function deleteProductService(productId) {
  deleteProduct(productId);
}
productCreateService();
// productSearchService('i');
// deleteProductService("62f2746358d45e941ebc0809");
// productUpdateService("62f259fa387782b4241270ee");
