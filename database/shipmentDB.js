const { readJson, writeFile } = require("../utils/fileHandling");
const { selectOneOrderService } = require("./OrderDB");


  exports.create = (obj, orderId) => {
    let ship = readJson(process.env.SHIP_JSON);
    let orderExists = selectOneOrderService(orderId).length <= 0 ? false : selectOneOrderService(orderId)[0];
    console.log(orderExists);
    if (orderExists && orderExists.status == "paid") {    
      ship.push(obj);
      console.log(ship);
        writeFile(process.env.SHIP_JSON, ship);
        return true;
    } else {
      throw "Either order or status is not paid";
    }
  }

  // console.log(shipping);

