const { readJson, writeFile } = require("../utils/fileHandling");
const { selectOneOrder } = require("./OrderDB");


  exports.create = (obj, orderId) => {
    let ship = readJson(process.env.SHIP_JSON);
    let orderExists = selectOneOrder(orderId).length <= 0 ? false : selectOneOrder(orderId)[0];
    console.log(orderExists);
    if (orderExists && orderExists.status == "paid") {    
      ship.push(obj);
      console.log(ship);
        writeFile(process.env.SHIP_JSON, ship);
        return true;
    } else {
      throw "Either orderId is not found or status is not paid";
    }
  }

exports.updateShipAddress = (shipmentId,{address = null}) => {
    let shipping = readJson(process.env.SHIP_JSON);
    const newShipAddress = shipping.map((ship) => {
      if (ship.shipmentId == shipmentId) {
        ship.address = address === null ? ship.address : address;
      }
      return ship;
    });
    writeFile(process.env.SHIP_JSON, newShipAddress);
} 



