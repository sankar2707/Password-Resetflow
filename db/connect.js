const mongoose = require("mongoose");

db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("Error while connecting DB: ", error);
  }
};

module.exports = db;