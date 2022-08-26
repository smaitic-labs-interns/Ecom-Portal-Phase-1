
const mongoose = require('mongoose')

const {Schema} = mongoose;

const ShippingSchema = new Schema(
  {
    orderId: { type: Schema.Types.ObjectId, ref: "order" },
    address: { type: String },
    shippingStatus: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);

const Shipping = mongoose.model('shipment',ShippingSchema)
module.exports = Shipping
