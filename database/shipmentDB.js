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

  // console.log(shipping);

