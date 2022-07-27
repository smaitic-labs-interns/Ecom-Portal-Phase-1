
const Order = require("../services/OrderService");


const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateController(
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  address,
  paymentMethod,
  status
) {
  let order = new Order({
    orderedBy: "hari",
    itemName:"fashion",
    quantity:12,
    itemPrice:1300,
    address:"birgunj",
    paymentMethod:"cash"
  });


  if (
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice) &&
    !isEmpty(address) &&
    !isEmpty(paymentMethod)
  ) {
    Order.create(
      order.toJson()
    );
  }
}
function orderUpdateController(orderId) {
  const { quantity, address } = {
    quantity: 5,
    address: " Kathmandu",
  };
  if (!isEmpty(quantity) && !isEmpty(address)) {
    Order.update(orderId, { quantity, address });
    console.log("successfully updated");
  }
}
function statusUpdateController(orderId) {
  const { status } = {
    status: "cancel",
  };
  if (!isEmpty(status)) {
    Order.update(orderId, { status });
    console.log("status changed successfully");
  }
}
function orderDeleteController(orderId) {
  Order.delete(orderId);
  console.log("delete successful");
}

// orderUpdateController("edb7ab18-0bcf-4c92-962f-eeb0c00305b3");
orderCreateController();
// statusUpdateController("edb7ab18-0bcf-4c92-962f-eeb0c00305b3");
// orderDeleteController("edb7ab18-0bcf-4c92-962f-eeb0c00305b3");
