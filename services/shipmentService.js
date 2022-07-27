const uuid = require("uuid");
const { readJson, writeFile } = require("../utils/fileHandling");
const { selectOneOrderService } = require("./OrderService");
const shipmentId = uuid.v4();

class Shipment {
  shipmentId;
  address;
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

  static create(obj, orderId) {
    let ship = readJson(process.env.SHIP_JSON);

    let orderExists = selectOneOrderService(orderId).length <= 0 ? false : selectOneOrderService(orderId)[0];

    console.log(orderExists);
    if (orderExists && orderExists.status == "paid") {    
      ship.push(obj);
      console.log(ship);
      try {
        writeFile(process.env.SHIP_JSON, ship);
        return true;
      } catch (error) {
        console.log(error);
      }
    } else {
      throw "Either order or status is not paid";
    }
  }

  // console.log(shipping);
}

module.exports = Shipment;
