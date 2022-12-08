const mongoose = require("mongoose");

let isConnected = 0;

const connectDB = async () => {
  if (isConnected === 1) return;
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
