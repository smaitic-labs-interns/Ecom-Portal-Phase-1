const { readJson, writeFile } = require("../utils/fileHandling");
const Order = require('../model/OrderModel')
exports.createOrder = async () => {
  try {
    
    // let order = await readJson(process.env.ORDER_JSON);
    // order = [...order, obj];
    // writeFile(process.env.ORDER_JSON, order);
    // return order;
  } catch (error) {
    throw error
  }
};

exports.updateOrder = async (orderId,{quantity = null,status = null}
) => {
  try {
     let orders = await readJson(process.env.ORDER_JSON);
     const newOrders = orders.map((order) => {
       if (order.orderId == orderId) {
         order.quantity = quantity === null ? order.quantity : quantity;
         order.status = status === null ? order.status : status;
       }
       return order;
     });
     writeFile(process.env.ORDER_JSON, newOrders);
  } catch (error) {
    throw error
  }
 
};
exports.deleteOrder = async (orderId) => {
  try {
    let order = await readJson(process.env.ORDER_JSON);
    const orders = order.filter((order) => {
      return order.orderId !== orderId;
    });
    writeFile(process.env.ORDER_JSON, orders);
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
