const path = require("path");
const rootDir = require("../util/path");

exports.getContactUs = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

exports.postContactUs = (req, res) => {
  console.log(req.body);
  res.redirect("/success");
};

exports.getSuccess = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
