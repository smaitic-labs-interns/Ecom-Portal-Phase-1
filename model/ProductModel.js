const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const uniqueId = uuid.v4();

class Product {
  uniqueId;
  title;
  description;
  price;
  constructor({ title, description, price }) {
    this.uniqueId = uniqueId;
    this.title = title;
    this.description = description;
    this.price = price;
  }
  toJson() {
    return {
      uniqueId: this.uniqueId,
      title: this.title,
      description: this.description,
      price: this.price,
    };
  }

  static create(obj) {
    let product = readJson("../database/product.json");
    const exists = product.filter((product) => {
      return product.title == obj.title;
    });
    if (exists.length == 0) {
      product.push(obj);
      console.log(product);
      try {
        writeFile("../database/product.json", product);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }

  static selectAll() {
    const product = readJson("../database/product.json");
    return product;
  }

  static filterOne(title) {
    let reader = readJson("../database/product.json");
    return reader.filter((product) => product.title.includes(title));
  }
  static selectOne(title) {
    let reader = readJson("../database/product.json");
    return reader.filter((product) => product.title === title);
  }

  static delete(title) {
    let product = readJson("../database/product.json");
    const products = product.filter((product) => {
      return product.title !== title;
    });
    writeFile("../database/product.json", products);
  }
  static update(_title, { title = null, description = null, price = null }) {
    let product = readJson("../database/product.json");
    const newProduct = product.map((prod) => {
      if (prod.title == _title) {
        prod.title = title === null ? prod.title : title;
        prod.description =
          description === null ? prod.description : description;
        prod.price = price === null ? prod.price : price;
      }
      return prod;
    });
    writeFile("../database/product.json", newProduct);
  }
}

module.exports = Product;
