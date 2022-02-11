const mongoose = require("mongoose");

mongoose.connect(
  // "mongodb://lmsUser:pnAjhjRIWBE@65.1.50.244/lms?retryWrites=true&w=majority",
  "mongodb://localhost:27017/seanet?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("successfully created connection with database");
    } else {
      console.log("error in connection:" + err);
    }
  }
);