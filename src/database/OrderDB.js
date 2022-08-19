const Order = require("../model/OrderModel");
exports.createOrder = async (order) => {
  try {
    await Order.create(order);
  } catch (error) {
    throw error;
  }
};

exports.totalBillCalculate = async () => {
  await Order.aggregate({
    $multiply: ["price", "quantity"],
  });
};

exports.updateOrder = async (id, quantity) => {
  console.log(quantity, "pass");
  try {
    const checkUpdate = await Order.findByIdAndUpdate(id, {
      quantity,
    });
    console.log(checkUpdate);
  } catch (error) {
    throw error;
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
exports.deleteOrder = async (id) => {
  try {
    let order = await Order.findByIdAndDelete(id);
    return order;
  } catch (error) {
    throw error;
  }
};
