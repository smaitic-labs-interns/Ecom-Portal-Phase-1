const { productCreateService, productUpdateService, productSearchService, productDeleteService, getProductService } = require("../service/productService");

exports.getProduct = async (req, res) => {
  const {title, description, quantity, price} = req.params
  
  console.log(req.params, "checking products");
  await getProductService(title, description, quantity, price);
  return res.json(title, description, quantity, price);
}
exports.productCreate = async (req, res) => {
  const { title, description, quantity, price } = req.body;
  await productCreateService(title, description, quantity, price);
  return res.json({ title, description, quantity, price });
};
exports.productUpdate = async (req, res) => {
  const { id, quantity, price } = req.body;
  await productUpdateService(id, quantity, price);
  return res.json({ id,quantity, price });
};
exports.productSearch = async (req, res) => {
  const { search } = req.body;
  const response =  await productSearchService(search);
  return res.json({response});
};
exports.productDelete =  (req, res) => {
  const {productId} = req.body;
   let response =  productDeleteService(productId);
   if(response)
  return res.json({ message:'success' });
  else
  return res.status(401).json({message:'provide valid productId'})
};


