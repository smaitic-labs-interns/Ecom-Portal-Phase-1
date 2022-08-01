const { create } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });

function createShipmentService(orderId, status) {
  try {
    let ship = new Shipment({
      orderId: "6bfe0d81-c36d-443a-b71f-15d08a91fcea",
      status: "paid",
    });
    console.log(orderId, status);
    create(ship.toJson(), ship.orderId);
  } catch (error) {
    console.log(error);
  }
}

createShipmentService();
