
const mongoose = require('mongoose')

const {Schema} = mongoose;

const ShippingSchema = new Schema({
  orderId:{type: Schema.Types.ObjectId, ref:'order'},
  address:{type:String},
  shippingStatus:{type: String},
  status:{type:String}
})

const Shipping = mongoose.model('shipment',ShippingSchema)
module.exports = Shipping


// const uuid = require("uuid");
// const shipmentId = uuid.v4();


// class Shipment {
//   shipmentId;
//   orderId;
//   address;
//   shippingStatus;
//   status;

//   constructor({ orderId, status, shippingStatus, address }) {
//     (this.shipmentId = shipmentId),
//       (this.orderId = orderId),
//       (this.address = address),
//       (this.shippingStatus = shippingStatus),
//       (this.status = status)
    
//   }

//   toJson() {
//     return {
//       shipmentId: this.shipmentId,
//       orderId: this.orderId,
//       address: this.address,
//       shipmentStatus: this.shippingStatus,
//       status: this.status,
     
//     };
//   }
// }

// module.exports = Shipment;
