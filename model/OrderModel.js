const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const uniqueId = uuid.v4();

class Order {
  static ORDER_STATUS = ["paid", "delivered", "pending"];
  uniqueId;
  orderedBy;
  itemName;
  quantity;
  itemPrice;
  status;
  constructor({ orderedBy, itemName, quantity, itemPrice, status = null }) {
    this.uniqueId = uniqueId;
    this.orderedBy = orderedBy;
    this.itemName = itemName;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
    if (Order.ORDER_STATUS.includes(status)) {
      this.status = status;
    }
    else{
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
      status: this.status,
    };
  }

  static create(obj) {
    let order = readJson("../database/order.json");
    order = [...order, obj];

    try {
      writeFile("../database/order.json", order);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  static update( uniqueId,{orderedBy = null,quantity = null,itemName = null,itemPrice = null,status = null,}) {
    let orders = readJson("../database/order.json");
    const newOrders = orders.map((order) => {
      if (order.uniqueId == uniqueId) {
        order.orderedBy = orderedBy === null ? order.orderedBy : orderedBy;
        order.quantity = quantity === null ? order.quantity : quantity;
        order.itemName = itemName === null ? order.itemName : itemName;
        order.itemPrice = itemPrice === null ? order.itemPrice : itemPrice;
        order.status = status === null ? order.status : status;
        // console.log(status)
        if (!Order.ORDER_STATUS.includes(Order.status)) {
          throw "Invalid status";
        }
      }
      return order;
    });
    writeFile("../database/order.json", newOrders);
  }

 
  
}
module.exports = Order;
