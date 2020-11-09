const UsageHistory = require("./../services/UsageHistoryService");

function UsageHistoryController() {
  const listUsageHistory = function(req, res) {
    UsageHistory.list().then(data => res.json(data));
  };

  const addUsageHistory = function(req, res) {
    UsageHistory.add(req.body).then(data => res.json(data));
  };

  const deleteUsageHistory = function(req, res) {
    UsageHistory.delete(req.params.id).then(() => res.json("Purchase History Deleted"));
  };

  const updateUsageHistory = function(req, res) {
    UsageHistory.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getUsageHistory = function(req, res) {
    UsageHistory.get(req.params.id).then(data => res.json(data)); 
  }

  const getUnauthorizedUsageHistory = function(req, res) {
    UsageHistory.getUnauthorized().then(data => res.json(data)) ;
  }

  const getAuthorizedUsageHistory = function(req, res) {
    UsageHistory.getAuthorized().then(data => res.json(data)) ;
  }

  const getItemUsageHistory = function(req, res) {
    UsageHistory.getItemHistory(req.params.itemname).then(data => res.json(data)) ;
  }

  return {
    list: listUsageHistory,
    add: addUsageHistory,
    delete: deleteUsageHistory,
    update: updateUsageHistory,
    get: getUsageHistory,
    getUnauthorized: getUnauthorizedUsageHistory,
    getAuthorized: getAuthorizedUsageHistory,
    getItemHistory: getItemUsageHistory
  };
}

module.exports = UsageHistoryController();
