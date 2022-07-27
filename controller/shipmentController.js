const Shipment = require('../services/shipmentService')
require('dotenv').config({path: "../.env"})

function createShipmentController(orderId, status){
    let ship = new Shipment({
      orderId: "d706d742-9473-4a90-afd0-7093eb706ac",
      status: "paid",
    });

    console.log(orderId, status)

    Shipment.create(ship.toJson());
}

createShipmentController()