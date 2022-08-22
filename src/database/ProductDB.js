const Product = require("../model/ProductModel");
exports.createProduct = async (product) => {
  try {
    let productExists = await Product.findOne({ title: product.title });
    console.log(productExists);
    if (productExists) {
      console.log("product exists create new products");
    } else {
      await Product.create(product);
    }
  } catch (error) {
    throw error;
  }
};

exports.updateProduct = async (id, title, description,price,quantity) => {
  console.log(id, "check");
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, {
      title,
      description,
      price,
      quantity
    });
    return updateProduct;
  } catch (error) {
    console.log('product not found')
  }
};

exports.filterOneProductOnSearch = async (query) => {
  try {
    let reader = await Product.find();
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

exports.deleteProduct = async (productId) => {
  try {
    let product = await Product.findByIdAndDelete(productId);
    return product;
  } catch (error) {
    throw error;
  }
};
