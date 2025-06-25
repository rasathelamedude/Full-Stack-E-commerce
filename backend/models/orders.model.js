import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      required: true,
      default: "Pending",
    },
    shippingInfo: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
  },
  { timestamps: true }
);

orderSchema.pre("save", function (next) {
  let totalPrice = this.products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  this.totalAmount = totalPrice;
  next();
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
