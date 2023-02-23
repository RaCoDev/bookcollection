const { Schema,model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    maxlength: [50, "Not more than 50 character"],
    lowercase:true
  },
  author: { type: String, lowercase:true },
  price: { type: Number },
  slug: { type: String },
});

module.exports =model('BookSchema', BookSchema);
