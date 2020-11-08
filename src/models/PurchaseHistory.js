const mongoose = require("mongoose");

const PurchaseHistorySchema = new mongoose.Schema({
    itemName:{type: String, required: true, trim: true},
    quantity: {type: Number, required: true},
    cost:{type: Number, required: true,},
    supplier: {type: String, trim: true},
    date:{type: Date, required: true},
    invoiceNumber: {type: String, trim: true},
    authorized: {type: Boolean, required: true}
},
{
    timestamps: true,
});

module.exports = mongoose.model("PurchaseHistory", PurchaseHistorySchema);
