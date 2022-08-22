# Ecom-Portal-Phase-1

commands to run service layer
src\service> node userService.js
src\service> node productService.js
src\service> node orderService.js
src\service> node cartService.js
src\service> node shipmentService.js


functions to run userService
signup() 
login()


functions to run productService:
productCreateService(title,description, quantity,price);
productSearchService(keyword);
deleteProductService(product id);
productUpdateService(productId, title, description,quantity,price);


functions to run orderService:
orderUpdateService(orderId, quantity);
orderCreateService({
userId: "62f7a8d45507e268b41b2c35"(orderId),
productId: "62f7be1be7304bda01b0d532"(productId),
status: "paid"(status type),
paymentType: "cash"(payment method),
quantity: 5,
price: 42000,
});

statusUpdateService(orderId, status type);
refundAndReturnService(orderId);
orderDeleteService(orderId);


functions to run in cartService:
cartCreateService();
deleteCartProductService(Objectid of array in products i.e _id inside products);
addItemToCart();
cartDeleteService(cartId);


functions to run shipmentService:
createShipmentService(orderId, address);
updateShipmentService(shipId,address);
cancelShipmentService(orderId, shipId);
deleteShipmentService(shipId);

