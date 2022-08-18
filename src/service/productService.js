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
mongoConnect();


async function productCreateService(title, description, quantity, price) {
  try {
    let product = new Product({
      title: "T-shirt",
      description: "clothes",
      quantity: 10,
      price: 50000,
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

async function productUpdateService(id,title, description) {

    const productID = await Product.findById(id);
    console.log(productID, "search");
    if (productID){ 
      await updateProduct(id, title, description)
    }
    else{
      throw "productId does not exists "
    }
  
    
}
async function productSearchService(search) {
  try{
  let product = await filterOneProductOnSearch(search);
  console.log("query result", product);
  }
  catch(error){
    throw error;
  }
}

function deleteProductService(productId) {
  deleteProduct(productId);
}
// productCreateService();
// productSearchService('r');
// deleteProductService("62f7a9d2728987dad2b847f9");
productUpdateService("62f7bde1df16a3e7093f22bc", 'nice clothes', 'me');
