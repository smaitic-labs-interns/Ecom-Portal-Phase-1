const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const uniqueId = uuid.v4();
// require("dotenv").config({path:'.env'});

class Order {
  static ORDER_STATUS = ["paid", "delivered", "pending", "cancel"];
  uniqueId;
  orderedBy;
  itemName;
  quantity;
  itemPrice;
  address;
  status;
  constructor({ orderedBy, itemName, quantity, itemPrice, address, status }) {
    this.uniqueId = uniqueId;
    this.orderedBy = orderedBy;
    this.itemName = itemName;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
    this.address = address;
    if (Order.ORDER_STATUS.includes(status)) {
      this.status = status;
    } else {
      this.status = "pending";
    }
  }
  toJson() {
    return {
      uniqueId: this.uniqueId,
      orderedBy: this.orderedBy,
      itemName: this.itemName,
      quantity: this.quantity,
      itemPrice: this.itemPrice,
      address: this.address,
      status: this.status,
    };
  }

  static create(obj) {
    let order = readJson(process.env.ORDER_JSON);
    order = [...order, obj];

    try {
      writeFile(process.env.ORDER_JSON, order);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  static update(
    uniqueId,
    {
      orderedBy = null,
      quantity = null,
      address = null,
      itemName = null,
      itemPrice = null,
      status = null,
    }
  ) {
    let orders = readJson(process.env.ORDER_JSON);
    const newOrders = orders.map((order) => {
      if (order.uniqueId == uniqueId) {
        order.orderedBy = orderedBy === null ? order.orderedBy : orderedBy;
        order.quantity = quantity === null ? order.quantity : quantity;
        order.itemName = itemName === null ? order.itemName : itemName;
        order.itemPrice = itemPrice === null ? order.itemPrice : itemPrice;
        order.address = address === null ? order.address : address;
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
  static delete(uniqueId) {
    let order = readJson(process.env.ORDER_JSON);
    const orders = order.filter((order) => {
      return order.uniqueId !== uniqueId;
    });
    writeFile(process.env.ORDER_JSON, orders);
  }
}
module.exports = Order;
