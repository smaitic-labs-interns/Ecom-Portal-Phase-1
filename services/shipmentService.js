const Order = require("../database/order.json");
const uuid = require("uuid");
const { readJson, writeFile } = require("../utils/fileHandling");
const shipmentId = uuid.v4();

class Shipment {
  shipmentId;
  orderId;
  status;

  constructor({ orderId, status }) {
    (this.shipmentId = shipmentId),
      (this.orderId = orderId),
      (this.status = status);
  }

  toJson() {
    return {
      shipmentId: this.shipmentId,
      orderId: this.orderId,
      status: this.status,
    };
  }

  static create(obj) {
    let ship = readJson(process.env.SHIP_JSON);

    let order = readJson(process.env.ORDER_JSON);
    const exists = order.filter((order) => {
      return order.orderId == obj.orderId;
    });
    console.log(exists)
    if (!exists.length == 0) {
      ship.push(obj);
      console.log(ship);
      try {
        writeFile(process.env.SHIP_JSON, ship);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
    else{
      console.log("order ID is not valid");
    }
     }

  
    // console.log(shipping);

  
    
  
}

module.exports = Shipment;
