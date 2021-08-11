var express = require("express");
var router = express.Router();
const indexController = require("../controllers/index");

/* loaclhost/api/... */
router.get("/", indexController.getCustomers);
router.post("/add", indexController.add_customer);
router.put("/:id/edit", indexController.edit_customer);
router.get("/:id/delete", indexController.delete_customer);

module.exports = router;
