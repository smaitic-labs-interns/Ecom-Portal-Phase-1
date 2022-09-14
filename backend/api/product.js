const { productCreateService, productUpdateService, productSearchService, productDeleteService, getProductService } = require("../service/productService");

exports.getProduct = async (req, res) => {
    try {
        const response = await getProductService();
        console.log('cfdasfsad',response);
        res.status(200).json({
            'message': 'Success',
            'data': response
        })
    }catch (error) {
        res.status(400).send(error);
    }
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


