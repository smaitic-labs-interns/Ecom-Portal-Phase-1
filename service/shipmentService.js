const { create, updateShipAddress } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });
const {isEmpty} = require('../utils/validator');

function createShipmentService(orderId, status) {
  try {
    let ship = new Shipment({
      orderId: "d706d742-9473-4a90-afd0-7093eb706ac5",
      address: "kathmandu",
      
      shippingStatus: "on the way",
      status: "paid",
    });
    console.log(orderId, status);
    create(ship.toJson(), ship.orderId);
  } catch (error) {
    console.log(error);
  }
}

function updateShipmentService (shipmentId) {
 try {
   const { address } = {
     address: " Bhaktapur",
   };
   if ( !isEmpty(address)) {
     updateShipAddress(shipmentId, { address });
   }
 } catch (error) {
   console.log(error);
 }
}



createShipmentService();
// updateShipmentService("4a46ef30-ea85-4ba5-8549-721e8062b439");
