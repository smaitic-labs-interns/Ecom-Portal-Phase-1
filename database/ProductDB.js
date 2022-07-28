const { readJson, writeFile } = require("../utils/fileHandling");
// const uuid = require("uuid");
// const productId = uuid.v4();

  exports.createProduct =(obj) => {
    let product = readJson(process.env.PRODUCT_JSON);
    const exists = product.filter((product) => {
      return product.title == obj.title;
    });
    // console.log(exists)
    if (exists.length == 0) {
      product.push(obj);
      // console.log(product);
      try {
        writeFile(process.env.PRODUCT_JSON, product);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
    else{
      console.log("product already exists");
    }
  }

  exports.selectAllProduct = () => {
    const product = readJson(process.env.PRODUCT_JSON);
    return product;
  }

  exports.filterOneProduct = (title) => {
    let reader = readJson(process.env.PRODUCT_JSON);
    return reader.filter((product) => product.title.includes(title));
  }
  exports.selectOneProduct = (productId) => {
    let reader = readJson(process.env.PRODUCT_JSON);
    return reader.filter((product) => product.productId === productId);
  }

  exports.deleteProduct = (productId) => {
    let product = readJson(process.env.PRODUCT_JSON);
    const products = product.filter((product) => {
      return product.productId !== productId;
    });
    writeFile(process.env.PRODUCT_JSON, products);
  }
  exports.updateProduct =(_productId, { title = null, description = null, price = null }) => {
    let product = readJson(process.env.PRODUCT_JSON);
    const newProduct = product.map((prod) => {
      if (prod.productId == _productId) {
        prod.title = title === null ? prod.title : title;
        prod.description =
          description === null ? prod.description : description;
        prod.price = price === null ? prod.price : price;
      }
      return prod;
    });
    writeFile(process.env.PRODUCT_JSON, newProduct);
  }



