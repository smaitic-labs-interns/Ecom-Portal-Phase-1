
const uuid = require("uuid");
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
}

module.exports = Shipment;
