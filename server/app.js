var express = require("express");
const cors = require("cors");
const logger = require("morgan")
require("./models/Customers");
var indexRouter = require("./routes/index");

const port = process.env.port || 5000;
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

/*MVC
  Model => postgresql
  View => react
  Controller => self-written
*/




app.listen(port, () => {
  console.log(`server has started on port 5000`);
});

module.exports = app;
