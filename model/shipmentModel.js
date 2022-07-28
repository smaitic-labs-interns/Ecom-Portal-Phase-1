
const uuid = require("uuid");
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
    this.address = address;
  }

  toJson() {
    return {
      shipmentId: this.shipmentId,
      orderId: this.orderId,
      status: this.status,
      address: this.address,
    };
  }
}

module.exports = Shipment;
