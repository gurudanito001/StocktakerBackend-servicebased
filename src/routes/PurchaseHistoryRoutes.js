const express = require("express");
const router = express.Router();
const PurchaseHistoryController = require("./../controller/PurchaseHistoryController");

router.get("/list", PurchaseHistoryController.list);
router.post("/add", PurchaseHistoryController.add);
router.delete("/delete/:id", PurchaseHistoryController.delete);
router.post("/update/:id", PurchaseHistoryController.update);
router.get("/getpurchasehistory/:id", PurchaseHistoryController.get);
router.get("/getunauthorizedpurchasehistory", PurchaseHistoryController.getUnauthorized);
router.get("/getauthorizedpurchasehistory/", PurchaseHistoryController.getAuthorized);
router.get("/getitempurchasehistory/:itemname", PurchaseHistoryController.getItemHistory);

module.exports = router;
