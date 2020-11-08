const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const cors = require('cors');
const BookRoutes = require("./routes/BookRoutes");
const UserRoutes = require("./routes/UserRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");
const SparePartRoutes = require("./routes/SparePartRoutes");
const PurchaseHistoryRoutes = require("./routes/PurchaseHistoryRoutes");
const UsageHistoryRoutes = require("./routes/UsageHistoryRoutes");

// parse application/json
app.use(BodyParser.json());
app.use(cors());


app.use("/api/book", BookRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/vehicle", VehicleRoutes);
app.use("/api/spareparts", SparePartRoutes);
app.use("/api/purchasehistory", PurchaseHistoryRoutes);
app.use("/api/usagehistory", UsageHistoryRoutes);

module.exports = app;
