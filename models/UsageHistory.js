const mongoose = require("mongoose");

const UsageHistorySchema = new mongoose.Schema({
    itemName:{type: String, required: true, trim: true},
    quantity: {type: Number, required: true},
    vehicleFor:{type: String, required: true,},
    authorizedBy: {type: String},
    date:{type: Date, required: true},
    purpose: {type: String, trim: true},
    authorized: {type: Boolean, required: true}
},
{
    timestamps: true,
});

module.exports = mongoose.model("UsageHistory", UsageHistorySchema);
