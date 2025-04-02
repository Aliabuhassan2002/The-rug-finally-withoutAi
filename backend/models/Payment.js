// const mongoose = require("mongoose");

// const paymentSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     order: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Order",
//       required: true,
//     },
//     paymentMethod: {
//       type: String,
//       enum: ["credit_card", "paypal", "stripe"],
//       required: true,
//     },
//     transactionId: { type: String, required: true }, // From payment gateway
//     amount: { type: Number, required: true },
//     currency: { type: String, default: "USD" },
//     status: {
//       type: String,
//       enum: ["pending", "completed", "failed"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Payment", paymentSchema);
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: String,
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    details: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
