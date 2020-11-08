const mongoose = require("mongoose");
require('dotenv').config();

const serverURI = "mongodb+srv://gurudanito001:4251112237@cluster0-cymo6.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority" ;

class DBConnection {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(serverURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
        console.log( err);
      });
  }
}

module.exports = new DBConnection();
