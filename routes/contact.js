const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const contactUsController = require("../controllers/contactUs");

const router = express.Router();

router.get("/contact-us", contactUsController.getContactUs);
router.post("/contact-us", contactUsController.postContactUs);

module.exports = router;
