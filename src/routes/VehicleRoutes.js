const express = require("express");
const router = express.Router();
const VehicleController = require("./../controller/VehicleController");

router.get("/list", VehicleController.list);
router.post("/add", VehicleController.add);
router.delete("/delete/:id", VehicleController.delete);
router.post("/update/:id", VehicleController.update);
router.get("/getVehicle/:id", VehicleController.get);

module.exports = router;
