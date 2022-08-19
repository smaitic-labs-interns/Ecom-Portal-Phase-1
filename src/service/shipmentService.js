const { createShipment, updateShipAddress } = require("../database/shipmentDB");
const Shipment = require("../model/shipmentModel");
require("dotenv").config({ path: "../.env" });
const { isEmpty } = require("../utils/validator");
const {mongoConnect} = require('../connectDatabase/mongoConnect')
mongoConnect()


async function createShipmentService() {
  try {
    let ship = new Shipment({
      orderId: "62fcb0b3de74ba80b6872b19",
      address: "kathmandu",
      shippingStatus: "on the way",
      status: "paid",
    });
    console.log(ship);
   await createShipment(ship,ship.orderId);

  } catch (error) {
    throw error;
  }
}

async function updateShipmentService(shipmentId, ) {
  try {
    const { address } = {
      address: "Bhaktapur",
    };
    if (!isEmpty(address)) {
     await updateShipAddress(shipmentId, { address });
    }
  } catch (error) {
    throw error;
  }
}

createShipmentService();
// updateShipmentService("62fe28e001b3a5a48b8d26dc");
