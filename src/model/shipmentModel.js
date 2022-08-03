
const uuid = require("uuid");
const shipmentId = uuid.v4();


class Shipment {
  shipmentId;
  orderId;
  address;
  shippingStatus;
  status;

  constructor({ orderId, status, shippingStatus, address }) {
    (this.shipmentId = shipmentId),
      (this.orderId = orderId),
      (this.address = address),
      (this.shippingStatus = shippingStatus),
      (this.status = status)
    
  }

  toJson() {
    return {
      shipmentId: this.shipmentId,
      orderId: this.orderId,
      address: this.address,
      shipmentStatus: this.shippingStatus,
      status: this.status,
     
    };
  }
}

module.exports = Shipment;
