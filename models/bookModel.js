const { Schema,model } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true,'please enter title'],
    unique: true,
    trim: true,
    minlength:[8,'not more thn 10 character'],
    maxlength: [50, "Not more than 50 character"],
    lowercase:true
  },
  author: { type: String,required:[true,'please enter the author'],lowercase:true },
  price: { type: Number },
  slug: { type: String },
});

module.exports =model('BookSchema', BookSchema);
