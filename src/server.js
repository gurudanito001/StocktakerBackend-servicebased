const app = require("./app");
const db = require("./db/DBConnection");
const port = process.env.PORT
require('dotenv').config()

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
