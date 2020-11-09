const PurchaseHistory = require("../models/PurchaseHistory");

function PurchaseHistoryService() {
  return {
    list: () => PurchaseHistory.find(),
    add: data => new PurchaseHistory(data).save(),
    delete: id => PurchaseHistory.findByIdAndRemove(id),
    update: (id, newData) => PurchaseHistory.findByIdAndUpdate(id, newData, 
      function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated Purchase History : ", docs); 
        } 
      }),
    get: id => PurchaseHistory.findById(id),
    getUnauthorized: () => PurchaseHistory.find({authorized: false}),
    getAuthorized: () => PurchaseHistory.find({authorized: true}),
    getItemHistory: data => PurchaseHistory.find({ itemName: data, authorized: true}),
  };
}

module.exports = PurchaseHistoryService();
