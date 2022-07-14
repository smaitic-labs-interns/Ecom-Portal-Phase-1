const {readJson, writeFile } = require('../utils/fileHandling')
const uuid = require('uuid')
const uniqueId = uuid.v4()

class Order {
  uniqueId;
  orderedBy;
  itemName;
  quantity;
  itemPrice;
  constructor({ orderedBy, itemName, quantity, itemPrice }) {
    this.uniqueId = uniqueId;
    this.orderedBy = orderedBy;
    this.itemName = itemName;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }
  toJson() {
    return {
      uniqueId: this.uniqueId,
      orderedBy: this.orderedBy,
      itemName: this.itemName,
      quanity: this.quantity,
      itemPrice: this.itemPrice,
    };
  }

  static create(obj) {
    let order = readJson("../database/order.json");
    const exists = order.filter((order) => {
      return order.uniqueId == obj.uniqueId;
    });
    if (exists.length == 0) {
      order.push(obj);
      console.log(order);
      try {
        writeFile("../database/order.json", order);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}module.exports = Order