 const uuid = require("uuid");
 const orderId = uuid.v4();

 
 class Order{
  
  static ORDER_STATUS = ["paid", "delivered", "pending", "cancel"];
  static PaymentType = ["cash", "card", "paypal"];
  orderId;
  orderedBy;
  itemName;
  quantity;
  itemPrice;
  address;
  paymentMethod;
  status;
  constructor({
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    paymentMethod,
    status,
  }) {
    this.orderId = orderId;
    this.orderedBy = orderedBy;
    this.itemName = itemName;
    this.quantity = quantity;
    this.itemPrice = itemPrice;
    this.address = address;
    if (Order.PaymentType.includes(paymentMethod))
      this.paymentMethod = paymentMethod;
    else {
      console.error("Provide valid input for payment");  
    }

    if (Order.ORDER_STATUS.includes(status)) {
      this.status = status;
    } else {
      this.status = "pending";
    }
  }
  toJson() {
    return {
      orderId: this.orderId,
      orderedBy: this.orderedBy,
      itemName: this.itemName,
      quantity: this.quantity,
      itemPrice: this.itemPrice,
      address: this.address,
      paymentMethod: this.paymentMethod,
      status: this.status,
    };
  }
}

module.exports = Order;