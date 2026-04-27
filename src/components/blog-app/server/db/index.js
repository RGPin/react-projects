require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.wyslvxq.mongodb.net/`,
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
