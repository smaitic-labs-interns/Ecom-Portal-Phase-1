const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const orderId = uuid.v4();

class Order {
  static ORDER_STATUS = ["paid", "delivered", "pending", "cancel"];
  static PaymentType = ["cash", "card", "paypal"];
  orderId;
  orderedBy;
  itemName;
  quantity;
  itemPrice;
  address;
  paymentMethod;
  status;
  constructor({
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    paymentMethod,
    status,
  }) {
    this.orderId = orderId;
    this.orderedBy = orderedBy;
    this.itemName = itemName;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
    this.address = address;
    if (Order.PaymentType.includes(paymentMethod))
      this.paymentMethod = paymentMethod;
    // else {
    //   console.error("Provide valid input for payment");  
    // }

    if (Order.ORDER_STATUS.includes(status)) {
      this.status = status;
    } else {
      this.status = "pending";
    }
  }
  toJson() {
    return {
      orderId: this.orderId,
      orderedBy: this.orderedBy,
      itemName: this.itemName,
      quantity: this.quantity,
      itemPrice: this.itemPrice,
      address: this.address,
      paymentMethod: this.paymentMethod,
      status: this.status,
    };
  }

  static create(obj) {
    let order = readJson(process.env.ORDER_JSON);
    order = [...order, obj];
    if (!Order.PaymentType.includes(obj.paymentMethod)) {
      console.error("provide valid payment type");
      return;
    }
    try {
      writeFile(process.env.ORDER_JSON, order);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  static update(
    orderId,
    {
      orderedBy = null,
      quantity = null,
      address = null,
      itemName = null,
      itemPrice = null,
      paymentMethod = null,
      status = null,
    }
  ) {
    let orders = readJson(process.env.ORDER_JSON);
    const newOrders = orders.map((order) => {
      if (order.orderId == orderId) {
        order.orderedBy = orderedBy === null ? order.orderedBy : orderedBy;
        order.quantity = quantity === null ? order.quantity : quantity;
        order.itemName = itemName === null ? order.itemName : itemName;
        order.itemPrice = itemPrice === null ? order.itemPrice : itemPrice;
        order.address = address === null ? order.address : address;
        order.paymentMethod =
          paymentMethod === null ? order.paymentMethod : paymentMethod;
        order.status = status === null ? order.status : status;
        // console.log(status)
        if (!Order.ORDER_STATUS.includes(order.status)) {
          throw "Invalid status";
        }
      }
      return order;
    });
    writeFile(process.env.ORDER_JSON, newOrders);
  }
  static delete(orderId) {
    let order = readJson(process.env.ORDER_JSON);
    const orders = order.filter((order) => {
      return order.orderId !== orderId;
    });
    writeFile(process.env.ORDER_JSON, orders);
  }
}
module.exports = Order;
