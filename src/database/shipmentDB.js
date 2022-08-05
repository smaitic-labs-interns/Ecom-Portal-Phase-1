const { readJson, writeFile } = require("../utils/fileHandling");
const { selectOneOrder } = require('../database/OrderDB');



  exports.create = async (obj, orderId) => {
    try{
    let ship =  await readJson(process.env.SHIP_JSON);
    
    let reader = await readJson(process.env.ORDER_JSON)
    let orderExists = reader.filter((order) => order.orderId === orderId)
    console.log(ship);
    // let orderExists = await selectOneOrder(orderId).length <= 0 ? false : selectOneOrder(orderId)[0];
    console.log(orderExists, 'sadf');
    if (orderExists && orderExists.status == "paid") {    
      let newShip = ship.push(obj)
      console.log(newShip,'jkhjh');  
     await writeFile(process.env.SHIP_JSON, ship);
        // return true;
    } else {
      throw "Either orderId is not found or status is not paid";
    }
  }catch(error){
    console.log(error)
  }
  }

exports.updateShipAddress = async (shipmentId,{address = null}) => {
  try {
    let shipping = await readJson(process.env.SHIP_JSON);
    const newShipAddress = shipping.map((ship) => {
      if (ship.shipmentId == shipmentId) {
        ship.address = address === null ? ship.address : address;
      }
      return ship;
    });
    writeFile(process.env.SHIP_JSON, newShipAddress);
  } catch (error) {
    throw error
  }
    
} 



