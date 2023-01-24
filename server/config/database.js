const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const db_URL = process.env.MongoDB_URL;

const dbConfig = async () => {
  try {
    await mongoose.connect(db_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConfig;
