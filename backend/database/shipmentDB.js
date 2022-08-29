const Shipping = require("../model/shipmentModel");
const Order = require("../model/OrderModel");

exports.createShipment = async (ship, orderId) => {
  try {
    console.log(orderId, "check order");
    let orderExists = await Order.findById(orderId);
    if (orderExists && orderExists.status == "paid") {
      await Shipping.create(ship);
    } else {
      console.log("Either orderId is not found or status is not paid");
    }
  } catch (error) {
    throw error;
  }
};

exports.updateShipAddress = async (shipmentId, address) => {
  try {
    let searchId = await Shipping.findById(shipmentId);
    if (searchId) {
      await Shipping.findByIdAndUpdate(shipmentId, {
        address,
      });
    } else {
      console.log("order id not found");
    }
  } catch (err) {
    throw err;
  }
};
exports.cancelShipment = async (orderId, shipId, shippingStatus) => {
  try {
    console.log(orderId, "check order");
    let orderExists = await Order.findById(orderId);
    if (orderExists && orderExists.status == "canceled") {
      await Shipping.findByIdAndUpdate(shipId, {
        shippingStatus,
      });
      return;
    } else {
      console.log("invalid id or status is not canceled");
    }
  } catch (error) {
    throw error;
  }
};

exports.deleteShipment = async (shipmentId) => {
  let existsId = await Shipping.findByIdAndDelete(shipmentId);
  return existsId;
};
