const {
  createOrder,
  updateOrder,
  deleteOrder,
  totalBillCalculate,
  updateStatus,
} = require("../database/OrderDB");
const Order = require("../model/OrderModel");
const { isEmpty } = require("../utils/validator");
const User = require("../model/UserModel");
const Product = require("../model/ProductModel");
require("dotenv").config({ path: "../.env" });
const { mongoConnect } = require("../connectDatabase/mongoConnect");

mongoConnect();

async function orderCreateService(
  userId,
  productId,
  quantity,
  price,
  paymentType,
  totalAmount
) {
  try {
    let newOrder = new Order({
      userId: "62f7a9688f6b195ae727bf16",
      productId: "62f7bdfdc866f265bede7622",
      quantity: 12,
      price: 48300,
      paymentType: "cash",
      status: "paid",
      totalAmount: totalBillCalculate(totalAmount),
    });

    const user = await User.findById(newOrder.userId);
    const product = await Product.findById(newOrder.productId);
    console.log(user, "check user");
    console.log(product, "check product");
    if (!user || !product) {
      console.log("user ID or product ID not found");
      return false;
    }
    if (!newOrder.status || !newOrder.paymentType)
      console.log("invalid status or invalid payment type");
    else {
      if (
        !isEmpty(userId) &&
        !isEmpty(productId) &&
        !isEmpty(quantity) &&
        !isEmpty(price) &&
        !isEmpty(paymentType) &&
        !isEmpty(totalAmount)
      )
        await createOrder(newOrder);
    }
  } catch (error) {
    throw error;
  }
}

async function orderUpdateService(id, quantity) {
  try {
    const existsOrder = await Order.findById(id);
    console.log(existsOrder, "order exist");
    if (!existsOrder) {
      console.log("order does not exists ");
      return
    } else {
      if (!isEmpty(quantity)) {
        await updateOrder(id, quantity);

        console.log("successfully updated");
      }
    }
  } catch (error) {
    throw error;
  }
}

async function statusUpdateService(id, status) {
  console.log(status,'saldjgh');

  try { 

      const existsId = await Order.findById(id);
      console.log(existsId, "id exist");

      if (!existsId ) {
        console.log("id does not exists ");
        return
      
      } else {
        if (!isEmpty(status)) {
          await updateStatus(id, status);

          console.log("successfully updated");
        }
      }
  } catch (error) {
    throw error;
  }
}

function orderDeleteService(id) {
  try {
    deleteOrder(id);
    console.log("delete successful");
  } catch (error) {
    throw error;
  }
}

// orderUpdateService("62fcb0b3de74ba80b6872b19", 20);
// orderCreateService();
statusUpdateService("62fcb0b3de74ba80b6872b19", 'paid');
// orderDeleteService("62fb4226c174b4b54c2b23e7");
