const express = require("express");
const registerController = require("../controller/userLoginController");
const router = express.Router();

console.log("inside register routes");
router
  .route("/")
  .post(registerController.addUser)

router.route("/login").post(registerController.getUser)

module.exports = router;