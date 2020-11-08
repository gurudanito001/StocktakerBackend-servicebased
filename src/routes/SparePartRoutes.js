const express = require("express");
const router = express.Router();
const SparePartController = require("./../controller/SparePartController");

router.get("/list", SparePartController.list);
router.post("/add", SparePartController.add);
router.delete("/delete/:id", SparePartController.delete);
router.post("/update/:id", SparePartController.update);
router.get("/getSparePart/:id", SparePartController.get);

module.exports = router;
