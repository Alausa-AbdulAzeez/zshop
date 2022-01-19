const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      required: true,
      type: String,
    },
    
    categories: {
      type: Array,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      required: true,
      type: Number,
    },
    inStock:{
      type:Boolean,
      default:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
