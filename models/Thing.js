const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  ingredient: { type: String, required: true }, 
  heat: { type: Number, required: true }, 
});

module.exports = mongoose.model('Thing', thingSchema);