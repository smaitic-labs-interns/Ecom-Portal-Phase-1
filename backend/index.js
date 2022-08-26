const express = require("express");
require("dotenv").config();

const { mongoConnect } = require("./connectDatabase/mongoConnect");
const {
  cartCreate,
  addCart,
  deleteCartProduct,
  deleteCart,
} = require("./api/cart");
const {
  orderCreate,
  orderUpdate,
  orderStatusUpdate,
  orderRefundAndEReturned,
  orderDelete,
} = require("./api/order");
const {
  productCreate,
  productUpdate,
  productSearch,
  productDelete,
} = require("./api/product");
const {
  createShipment,
  updateShipAddress,
  cancelShip,
  deleteShip,
} = require("./api/shipment");
const { signup, login } = require("./api/user");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/signup", signup);
app.post("/login", login);
app.get("/userinformation", login);
app.post("/productcreate", productCreate);
app.post("/productupdate", productUpdate);
app.get("/productsearch", productSearch);
app.post("/productdelete", productDelete);
app.post("/ordercreate", orderCreate);
app.post("/orderupdate", orderUpdate);
app.get("/statuschekc", orderStatusUpdate);
app.post("/statusupdate", orderStatusUpdate);
app.get("/refund", orderRefundAndEReturned);
app.post("/orderdelete", orderDelete);
app.post("/cartcreate", cartCreate);
app.post("/cartupdate", addCart);
app.get("/deletecartproduct", deleteCartProduct);
app.post("/deletecart", deleteCart);
app.post("/createshipment", createShipment);
app.post("/updateshipment", updateShipAddress);
app.post("/cancelshipment", cancelShip);
app.post("/deleteshipment", deleteShip);

mongoConnect();
app.get("/", (res, req) => {
  res.send("hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
return app;
