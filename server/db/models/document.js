const mongoose = require("mongoose");

const doc = new mongoose.Schema({
  _id: { type: String, required: true },
  document: { type: Object, required: true },
});

const DocSchema = mongoose.model("googledocs", doc);

module.exports = DocSchema;
