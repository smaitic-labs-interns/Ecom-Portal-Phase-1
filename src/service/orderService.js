const {
  createOrder,
  updateOrder,
  deleteOrder,
  totalBillCalculate
} = require("../database/OrderDB");
const Order = require("../model/OrderModel");
const { isEmpty } = require("../utils/validator");
const User = require('../model/UserModel')
const Product = require('../model/ProductModel')
require("dotenv").config({ path: "../.env" });
const {mongoConnect} = require('../connectDatabase/mongoConnect')

mongoConnect()

async function orderCreateService(
  userId, productId, quantity, price, paymentType, totalAmount
) {
 
  try {
    let newOrder = new Order({
      userId: "62f7a9688f6b195ae727bf16",
      productId: "62f7bdfdc866f265bede7622",
      quantity: 12,
      price: 48300,
      paymentType: "cash",
      status: "paid", 
      totalAmount: totalBillCalculate(totalAmount)
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
      !isEmpty(paymentType)&&
      !isEmpty(totalAmount)
    )
      await createOrder(newOrder,{totalAmount: price * quantity});
    }
    
  } catch (error) {
    throw error
  }
}

async function orderUpdateService(orderId) {
  try {
    let quantity = 5
      const existsOrder = await Order.findById(orderId)
      console.log(existsOrder,'order exist');
      if(!existsOrder){
        console.log('order does not exists ');
      }
      else{
    if (!isEmpty(quantity)) {
     let newQuantity = await updateOrder(quantity);
     console.log(newQuantity);
      console.log("successfully updated");
    }
  }
  } catch (error) {
    throw error
  }
}

async function statusUpdateService(orderId) {
  try {
    const { status } = {
      status: "paid",
    };
    if (!Order.ORDER_STATUS.includes(status)) {
      throw "Invalid status";
    }
    if (!isEmpty(status)) {
     await updateOrder(orderId, { status });
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

// orderUpdateService("62fb41e47cb42dfa93317539");
orderCreateService();
// statusUpdateService("013610fd-435e-4912-aab0-e1c0f1d492ee");
// orderDeleteService("62fb4226c174b4b54c2b23e7");
