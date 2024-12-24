const path = require("path");

const rootDir = require("../util/path");

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res) => {
  console.log(req.body);
  res.redirect("/shop");
};

exports.getShop = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
