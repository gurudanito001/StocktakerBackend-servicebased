const express = require("express");
const router = express.Router();
const UserController = require("./../controller/UserController");

router.get("/list", UserController.list);
router.post("/add", UserController.add);
router.delete("/delete/:id", UserController.delete);
router.post("/update/:id", UserController.update);
router.get("/getUser/:id", UserController.getUser);
router.get("/findEmail/:email", UserController.findEmail);


module.exports = router;
