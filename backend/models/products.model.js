import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required!"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required!"],
      minValue: 0,
    },
    image: {
      type: Image,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
