const { create, updateShipAddress } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });
const {isEmpty} = require('../utils/validator');

async function createShipmentService(orderId, status) {
  try {
    let ship = new Shipment({
      orderId: "af27f627-b988-4e2e-9402-0f39ac0ea7cc",
      address: "kathmandu",

      shippingStatus: "on the way",
      status: "paid",
    });
    console.log(orderId, status);
   await create(ship.toJson(), ship.orderId);
  } catch (error) {
    throw error
  }
}

function updateShipmentService (shipmentId) {
 try {
   const { address } = {
     address: "Kathmandu",
   };
   if ( !isEmpty(address)) {
     updateShipAddress(shipmentId, { address });
   }
 } catch (error) {
   throw error
 }
}



createShipmentService();
// updateShipmentService("4a46ef30-ea85-4ba5-8549-721e8062b439");
