const router = require("express").Router();
const {
  getCustomerInfo,
  getSubscriptionOrders,
} = require("../controllers/subscription");

router.get("/getCustomerInfo/:phoneNumber", getCustomerInfo);

router.get("/getSubscriptionOrders/:subscriptionId", getSubscriptionOrders);

module.exports = router;
