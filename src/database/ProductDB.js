const { readJson, writeFile } = require("../utils/fileHandling");
// const uuid = require("uuid");
// const productId = uuid.v4();

exports.createProduct = async (obj) => {
  try {
    let product = await readJson(process.env.PRODUCT_JSON);
    const exists = product.filter((product) => {
      return product.title == obj.title;
    });
    if (exists.length == 0) {
      product.push(obj);
      writeFile(process.env.PRODUCT_JSON, product);
      return true;
    } else {
      throw "product already exists";
    }
  } catch (error) {
    throw error
  }
  
};

exports.updateProduct = async (
  _productId,
  { title = null, description = null, price = null }
) => {
  try {
      let product = await readJson(process.env.PRODUCT_JSON);
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
  } catch (error) {
    throw error
  }

};

exports.selectAllProduct = () => {
  const product = readJson(process.env.PRODUCT_JSON);
  return product;
};

exports.filterOneProductOnSearch = async (query) => {
  try {
      let reader = await readJson(process.env.PRODUCT_JSON);
      const data = reader.filter((product) => {
        let search = product.title + " " + product.description;
        if (search.includes(query)) {
          return product;
        }
      });
      return data;
  } catch (error) {
    throw error  }
};

exports.selectOneProduct = async (productId) => {
  let reader = await readJson(process.env.PRODUCT_JSON);
  return reader.filter((product) => product.productId === productId);
};

exports.deleteProduct = async (productId) => {
  try {
      let product = await readJson(process.env.PRODUCT_JSON);
      const products = product.filter((product) => {
        return product.productId !== productId;
      });
      writeFile(process.env.PRODUCT_JSON, products);
  } catch (error) {
    throw error
  }

};
