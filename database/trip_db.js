const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/destinationManagement", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
