
const { createShipmentService, updateShipmentService, cancelShipmentService, deleteShipmentService } = require("../service/shipmentService");


exports.createShipmentRoute = async (req, res) => {
  const { orderId, address } = req.body;
  await createShipmentService(orderId, address);
  res.json({ orderId, address });
};

exports.updateShipAddressRoute = async (req, res) => {
  const { shipmentId, address } = req.body;
  await updateShipmentService(shipmentId, address);
  res.json({ shipmentId, address });
};

exports.cancelShipRoute = async (req, res) => {
  const { orderId, shipId } = req.body;
  await cancelShipmentService(orderId, shipId);
  res.json({ orderId, shipId });
};
exports.deleteShipRoute = async (req, res) => {
  const { shipmentId } = req.body;
  await deleteShipmentService(shipmentId);
  res.json({ shipmentId });
};


