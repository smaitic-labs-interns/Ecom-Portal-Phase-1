const User = require("../model/UserModel.js");
const { emailValidation } = require("../utils/validator.js");

function signup() {
 
    const user = new User({
      email: emailValidation("jerry@gmail.com"),
      password: "niceone",
      username: "james",
    });

    User.create(user.toJson());
  }


signup();

// const user = {
//   username: "jerry",
//   email: "jerry@gmail.com",
//   password: "asdgjlsa",
// };
