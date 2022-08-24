const  express = require('express');
require("dotenv").config();

const {mongoConnect} = require('./connectDatabase/mongoConnect');
const { cartCreateRoute, addCartRoute, deleteCartProductRoute, deleteCartRoute } = require('./routes/cartRoute');
const { orderCreateRoute, orderUpdateRoute, orderStatusUpdateRoute, orderRefundAndEReturnedRoute, orderDeleteRoute } = require('./routes/orderRoute');
const { productCreateRoute, productUpdateRoute, productSearchRoute, productDeleteRoute } = require('./routes/productRoute');
const { createShipmentRoute, updateShipAddressRoute, cancelShipRoute, deleteShipRoute } = require('./routes/shipmentRoute');
const { signupRoute,loginRoute } = require('./routes/userRoute');


const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.post('/signup',signupRoute);
app.post("/login", loginRoute);
app.post('/productcreate',productCreateRoute);
app.post('/productupdate',productUpdateRoute);
app.get('/productsearch',productSearchRoute);
app.post('/productdelete',productDeleteRoute);
app.post('/ordercreate',orderCreateRoute);
app.post('/orderupdate', orderUpdateRoute);
app.get('/statuschekc', orderStatusUpdateRoute);
app.post('/statusupdate',orderStatusUpdateRoute);
app.get('/refund', orderRefundAndEReturnedRoute);
app.post('/orderdelete', orderDeleteRoute);
app.post('/cartcreate',cartCreateRoute);
app.post('/cartupdate', addCartRoute);
app.get('/deletecartproduct',deleteCartProductRoute );
app.post('/deletecart', deleteCartRoute);
app.post('/createshipment',createShipmentRoute);
app.post('/updateshipment',updateShipAddressRoute);
app.post('/cancelshipment',cancelShipRoute)
app.post('/deleteshipment', deleteShipRoute )

 

mongoConnect()
 app.get('/', (res, req) => {
    res.send('hello')
 })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
  });
return app;



