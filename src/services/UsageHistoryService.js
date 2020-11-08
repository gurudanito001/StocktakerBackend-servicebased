const UsageHistory = require("../models/UsageHistory");

function UsageHistoryService() {
  return {
    list: () => UsageHistory.find(),
    add: data => new UsageHistory(data).save(),
    delete: id => UsageHistory.findByIdAndRemove(id),
    update: (id, newData) => UsageHistory.findByIdAndUpdate(id, newData, 
      function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated Purchase History : ", docs); 
        } 
      }),
    get: id => UsageHistory.findById(id),
    getUnauthorized: () => UsageHistory.find({authorized: false}),
    getAuthorized: () => UsageHistory.find({authorized: true}),
    getItemHistory: data => UsageHistory.find({ itemName: data, authorized: true}),
  };
}

module.exports = UsageHistoryService();
