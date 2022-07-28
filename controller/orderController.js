const {
  createOrderService,
  updateOrderService,
  deleteOrderService,
} = require("../service/orderService");
// const OrderSchema = require("../model/orderModel");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateController() {
  const {
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    paymentMethod,
    status,
  } = {
    orderedBy: "hello",
    itemName: "nom",
    quantity: 1,
    itemPrice: 100,
    address: "hetauda",
    paymentMethod: "cash",
  };

  // console.log(paymentMethod,'sss')

  if (
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice) &&
    !isEmpty(address) &&
    !isEmpty(paymentMethod)
  )
    console.log(paymentMethod);

  createOrderService(
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    paymentMethod,
    status
  );
}
function orderUpdateController(orderId) {
  const { quantity, address } = {
    quantity: 5,
    address: " Kathmandu",
  };
  if (!isEmpty(quantity) && !isEmpty(address)) {
    updateOrderService(orderId, { quantity, address });
    console.log("successfully updated");
  }
}
function statusUpdateController(orderId) {
  const { status } = {
    status: "cancel",
  };
  if (!isEmpty(status)) {
    updateOrderService(orderId, { status });
    console.log("status changed successfully");
  }
}
function orderDeleteController(orderId) {
  deleteOrderService(orderId);
  console.log("delete successful");
}

// orderUpdateController("6bfe0d81-c36d-443a-b71f-15d08a91fcea");
// orderCreateController();
statusUpdateController("6bfe0d81-c36d-443a-b71f-15d08a91fcea");
// orderDeleteController("6fd9d72b-4f27-4c22-abfd-b0dd11c4d95a");
