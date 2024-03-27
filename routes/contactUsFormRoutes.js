const express = require("express");
const contactUsFormController = require("../controller/contactUsFormController");
const router = express.Router();

console.log("inside contact us form router routes");

router
    .route("/postRecord")
    .post(contactUsFormController.addContactUsFormRecord)

router
    .route("/getAllRecords")
    .get(contactUsFormController.getAllContactUsFormRecords)

router
    .route("/updateFlag")
    .put(contactUsFormController.updateIsReadFlag)

router
    .route("/delContactUsRecord")
    .delete(contactUsFormController.delRecordByObjId)

module.exports = router;

