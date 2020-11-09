const PurchaseHistory = require("./../services/PurchaseHistoryService");

function PurchaseHistoryController() {
  const listPurchaseHistory = function(req, res) {
    PurchaseHistory.list().then(data => res.json(data));
  };

  const addPurchaseHistory = function(req, res) {
    PurchaseHistory.add(req.body).then(data => res.json(data));
  };

  const deletePurchaseHistory = function(req, res) {
    PurchaseHistory.delete(req.params.id).then(() => res.json("Purchase History Deleted"));
  };

  const updatePurchaseHistory = function(req, res) {
    PurchaseHistory.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getPurchaseHistory = function(req, res) {
    PurchaseHistory.get(req.params.id).then(data => res.json(data)); 
  }

  const getUnauthorizedPurchaseHistory = function(req, res) {
    PurchaseHistory.getUnauthorized().then(data => res.json(data)) ;
  }

  const getAuthorizedPurchaseHistory = function(req, res) {
    PurchaseHistory.getAuthorized().then(data => res.json(data)) ;
  }

  const getItemPurchaseHistory = function(req, res) {
    PurchaseHistory.getItemHistory(req.params.itemname).then(data => res.json(data)) ;
  }

  return {
    list: listPurchaseHistory,
    add: addPurchaseHistory,
    delete: deletePurchaseHistory   ,
    update: updatePurchaseHistory,
    get: getPurchaseHistory,
    getUnauthorized: getUnauthorizedPurchaseHistory,
    getAuthorized: getAuthorizedPurchaseHistory,
    getItemHistory: getItemPurchaseHistory
  };
}

module.exports = PurchaseHistoryController();
