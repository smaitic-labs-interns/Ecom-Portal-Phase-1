const {
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../database/OrderDB");
const Order = require("../model/OrderModel");
const { isEmpty } = require("../utils/validator");
const User = require('../model/UserModel')
const Product = require('../model/ProductModel')
require("dotenv").config({ path: "../.env" });
const {mongoConnect} = require('../connectDatabase/mongoConnect')

mongoConnect()

async function orderCreateService(
  userId, productId, quantity, price, paymentType,status
) {
  try {
    let newOrder = new Order({
      userId: "62f7a9688f6b195ae727bf16",
      productId: "62f7bdfdc866f265bede7622",
      quantity: 1,
      price: 100,
      paymentType: "card",
    });

    const user = await User.findById(newOrder.userId)
    const product = await Product.findById(newOrder.productId)

    console.log(user,'check user');
    console.log(product, 'check product');
    if(!user || !product){
      console.log('user or product not found');
      return false
    }

    if (!newOrder.status || !newOrder.paymentType)
      console.log("invalid status or invalid payment type");
   
    else{
    if (
      !isEmpty(userId) &&
      !isEmpty(productId) &&
      !isEmpty(quantity) &&
      !isEmpty(price) &&
      !isEmpty(paymentType)
    )
      await createOrder(newOrder);
    }
    
  } catch (error) {
    throw error
  }
}

function orderUpdateService(orderId) {
  try {
    const { quantity} = {
      quantity: 8,
    };
    if (!isEmpty(quantity)) {
      updateOrder(orderId, { quantity });
      console.log("successfully updated");
    }
  } catch (error) {
    throw error
  }
}

function statusUpdateService(orderId) {
  try {
    const { status } = {
      status: "paid",
    };
    if (!OrderSchema.ORDER_STATUS.includes(status)) {
      throw "Invalid status";
    }
    if (!isEmpty(status)) {
      updateOrder(orderId, { status });
      console.log("status changed successfully");
    }
  } catch (error) {
   throw error
  }
}

function orderDeleteService(orderId) {
 try {
   deleteOrder(orderId);
   console.log("delete successful");
 } catch (error) {
  throw error
 } 
}

// orderUpdateService("013610fd-435e-4912-aab0-e1c0f1d492ee");
orderCreateService();
// statusUpdateService("013610fd-435e-4912-aab0-e1c0f1d492ee");
// orderDeleteService("013610fd-435e-4912-aab0-e1c0f1d492ee");
