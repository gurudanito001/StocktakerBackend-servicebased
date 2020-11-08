const User = require("../models/User");

function UserService() {
  return {
    list: () => User.find(),
    add: data => new User(data).save(),
    delete: id => User.findByIdAndDelete(id),
    update: (id, newData) => User.findByIdAndUpdate(id, newData, 
      function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated User : ", docs); 
        } 
      }),
    getUser: id => User.findById(id),
    findEmail: email => User.findOne({ email: email })
  };
}

module.exports = UserService();
