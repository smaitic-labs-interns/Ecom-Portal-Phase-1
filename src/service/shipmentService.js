const { createShipment, updateShipAddress, deleteShipment, cancelShipment } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });
const { isEmpty } = require("../utils/validator");
const mongoose = require('mongoose')
const {mongoConnect} = require('../connectDatabase/mongoConnect')
mongoConnect()


async function createShipmentService(orderId, address) {
 var is_valid = mongoose.Types.ObjectId.isValid(orderId)
 if(is_valid){
  try {
    let ship = new Shipment({
      orderId: orderId,
      address: address,
      shippingStatus: 'ready for deliver',
    });
    console.log(ship);
   await createShipment(ship,orderId);
   return

  } catch (error) {
    throw error;
  }
}
console.log('provide valid id');
}

async function updateShipmentService(shipmentId, address  ) {
   var is_valid = mongoose.Types.ObjectId.isValid(shipmentId);
   if(is_valid){
  try{
    if (!isEmpty(address)) {
     await updateShipAddress(shipmentId, address );
    return
    }
  }
  catch(error){
    throw error
  }
}
  console.log('provide valid id');
}

async function cancelShipmentService(orderId, shipId) {
  var is_valid = mongoose.Types.ObjectId.isValid(orderId || shipId);
  if (is_valid) {
    try {
      let shippingStatus = 'canceled'

      await cancelShipment(orderId,shipId, shippingStatus);
      return;
    } catch (error) {
      throw error;
    }
  }
  console.log("provide valid id for order and shipping");
}


function deleteShipmentService(shipmentId){
  deleteShipment(shipmentId);
}



// createShipmentService("6302232d22bb55c0c826fed1", "Bhaktapur");
// updateShipmentService("63032e708fe1e0177e3d24af",'Bhaktapur');
cancelShipmentService("630225abafaf6bcc874808e4", "63033713fcb0cfabbc3b5c2e");
// deleteShipmentService("630225abafaf6bcc874808e4");
