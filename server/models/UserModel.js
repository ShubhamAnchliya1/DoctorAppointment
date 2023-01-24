const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    seenNotifications: {
      type: Array,
      default: [],
    },
    unseenNotifications: {
      type: Array,
      default: [],
    },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //     get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
  // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
