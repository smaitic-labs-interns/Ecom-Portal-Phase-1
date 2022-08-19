const Shipping = require("../model/shipmentModel");
const Order = require("../model/OrderModel");

exports.createShipment = async (ship, orderId) => {
  try {
    console.log(orderId, "check order");
    let orderExists = await Order.findById(orderId);
    if (orderExists && orderExists.status == "paid") {
      await Shipping.create(ship,);
    } else {
      throw "Either orderId is not found or status is not paid";
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateShipAddress = async (shipmentId, { address = null }) => {
  try {
    let shipping = await Shipping.findByIdAndUpdate(shipmentId, {
      address,
    });
    return shipping;
  } catch (error) {
    throw error;
  }
};
