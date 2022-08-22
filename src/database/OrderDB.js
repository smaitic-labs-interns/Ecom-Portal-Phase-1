const Order = require("../model/OrderModel");

exports.createOrder = async (newOrder) => {
  try {
    await Order.create(newOrder);
  } catch (error) {
    throw error;
  }
};


exports.updateOrder = async (id, quantity) => {

    console.log(quantity, "pass");
    try {
      const checkUpdate = await Order.findByIdAndUpdate(id, {
        quantity,
      });
      console.log(checkUpdate);
    } catch (error) {
      console.log("Order not found");
    }
  
};

exports.updateStatus = async (id, status) => {
  console.log(status, "pass");
  try {
    const checkUpdate = await Order.findByIdAndUpdate(id, {
      status,
    });
    console.log(checkUpdate);
  } catch (error) {
    throw error;
  }
};

exports.refundAAndReturnOrder = async (id, status) => {
  try {
    let orderId = await Order.findByIdAndUpdate(id,{
      status
    })
    return orderId
  } catch (error) {
    
  }
}
exports.deleteOrder = async (id) => {
  try {
    let order = await Order.findByIdAndDelete(id);
    return order;
  } catch (error) {
    throw error;
  }
};
