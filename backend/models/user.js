const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = Product = mongoose.model("product", productSchema);
