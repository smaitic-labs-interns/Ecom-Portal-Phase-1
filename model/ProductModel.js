const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const productId = uuid.v4();

class Product {
  productId;
  title;
  description;
  price;
  constructor({ title, description, price }) {
    this.productId = productId;
    this.title = title;
    this.description = description;
    this.price = price;
  }
  toJson() {
    return {
      productId: this.productId,
      title: this.title,
      description: this.description,
      price: this.price,
    };
  }

  static create(obj) {
    let product = readJson(process.env.PRODUCT_JSON);
    const exists = product.filter((product) => {
      return product.title == obj.title;
    });
    console.log(exists)
    if (exists.length == 0) {
      product.push(obj);
      console.log(product);
      try {
        writeFile(process.env.PRODUCT_JSON, product);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }

  static selectAll() {
    const product = readJson(process.env.PRODUCT_JSON);
    return product;
  }

  static filterOne(title) {
    let reader = readJson(process.env.PRODUCT_JSON);
    return reader.filter((product) => product.title.includes(title));
  }
  static selectOne(productId) {
    let reader = readJson(process.env.PRODUCT_JSON);
    return reader.filter((product) => product.productId === productId);
  }

  static delete(productId) {
    let product = readJson(process.env.PRODUCT_JSON);
    const products = product.filter((product) => {
      return product.productId !== productId;
    });
    writeFile(process.env.PRODUCT_JSON, products);
  }
  static update(_productId, { title = null, description = null, price = null }) {
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
}

module.exports = Product;
