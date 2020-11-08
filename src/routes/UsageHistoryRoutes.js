const express = require("express");
const router = express.Router();
const UsageHistoryController = require("./../controller/UsageHistoryController");

router.get("/list", UsageHistoryController.list);
router.post("/add", UsageHistoryController.add);
router.delete("/delete/:id", UsageHistoryController.delete);
router.post("/update/:id", UsageHistoryController.update);
router.get("/getusagehistory/:id", UsageHistoryController.get);
router.get("/getunauthorizedusagehistory", UsageHistoryController.getUnauthorized);
router.get("/getauthorizedusagehistory/", UsageHistoryController.getAuthorized);
router.get("/getitemusagehistory/:itemname", UsageHistoryController.getItemHistory);

module.exports = router;
