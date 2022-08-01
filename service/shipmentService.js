const { create } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });

function createShipmentService(orderId, status) {
  try {
    let ship = new Shipment({
      orderId: "d706d742-9473-4a90-afd0-7093eb706ac5",
      status: "paid",
    });
    console.log(orderId, status);
    create(ship.toJson(), ship.orderId);
  } catch (error) {
    console.log(error);
  }
}

createShipmentService();
