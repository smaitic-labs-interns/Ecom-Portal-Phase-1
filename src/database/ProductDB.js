const { readJson, writeFile } = require("../utils/fileHandling");
const Product = require("../model/ProductModel");
const { default: mongoose } = require("mongoose");

exports.createProduct = async (product) => {
  try {
    let productExists = await Product.findOne({ title: product.title });
    console.log(productExists);
    if (productExists) {
      console.log("product exists");
    } else {
      await Product.create(product);
    }
  } catch (error) {
    throw error;
  }
};

exports.updateProduct = async (title, description, quantity, price) => {
  try {
    const updateProduct = await Product.updateMany({
      title,
      description,
      quantity,
      price,
    });
    return updateProduct;
    // let product = await readJson(process.env.PRODUCT_JSON);
    // const newProduct = product.map((prod) => {
    //   if (prod.productId == _productId) {
    //     prod.title = title === null ? prod.title : title;
    //     prod.description =
    //       description === null ? prod.description : description;
    //     prod.price = price === null ? prod.price : price;
    //   }
    //   return prod;
    // });
    // writeFile(process.env.PRODUCT_JSON, newProduct);
  } catch (error) {
    throw error;
  }
};

// exports.selectAllProduct = () => {
//   const product = readJson(process.env.PRODUCT_JSON);
//   return product;
// };

exports.filterOneProductOnSearch = async (query) => {
  try {
    let reader = await Product.find()
    const data = reader.filter((product) => {
      let search = product.title + " " + product.description;
      if (search.includes(query)) {
        return product;
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
};

exports.selectOneProduct = async (productId) => {
  let reader = await readJson(process.env.PRODUCT_JSON);
  return reader.filter((product) => product.productId === productId);
};

exports.deleteProduct = async (productId) => {
  try {
    let product = await Product.findByIdAndDelete(productId)
    // const products = product.filter((product) => {
    //   return product.productId !== productId;
    // });
    // writeFile(process.env.PRODUCT_JSON, products)
  } catch (error) {
    throw error;
  }
};
