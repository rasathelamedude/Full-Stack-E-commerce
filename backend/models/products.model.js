import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required!"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
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
    category: {
      type: String,
      enum: [
        "OTC",
        "Prescription",
        "Personal Care & Hygiene",
        "Vitamines & Supplements",
        "Baby & Mom Care",
        "Medical Device & Equipment",
        "First Aid",
        "Sexuall Wellness",
      ],
      required: [true, "A category must be selected!"]
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
