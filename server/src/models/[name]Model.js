const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    // text: {
    //   type: String,
    //   required: [true, "please add a text value"]
    // }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Data", dataSchema);