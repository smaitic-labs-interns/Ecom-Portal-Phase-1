const { readJson, writeFile } = require("../utils/fileHandling");
const Order = require('../model/OrderModel')
exports.createOrder = async (order) => {
  try {
      await Order.create(order)
    // let order = await readJson(process.env.ORDER_JSON);
    // order = [...order, obj];
    // writeFile(process.env.ORDER_JSON, order);
    // return order;
  } catch (error) {
    throw error
  }
};

exports.totalBillCalculate = async () => {
  await Order.aggregate({

        $multiply: ['price', 'quantity']
      
    
  })
}

exports.updateOrder = async (quantity) => {
  console.log(quantity,'pass');
  try {
  const checkUpdate = await Order.updateOne({
    $set: {quantity}, new: true
  })
  console.log(checkUpdate);

  } catch (error) {
    throw error
  }
 
};
exports.deleteOrder = async (orderId) => {
  try {
    let order = await Order.findByIdAndDelete(orderId);
    return order;
  } catch (error) {
    throw error
  }
  
};

exports.selectOneOrder = async (orderId) => {
  try {
     let reader = await readJson(process.env.ORDER_JSON);
     return reader.filter((order) => order.orderId === orderId)[0];
  } catch (error) {
   throw error 
  }
 
};
