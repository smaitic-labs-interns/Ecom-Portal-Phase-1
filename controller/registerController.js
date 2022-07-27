const User = require("../services/UserService.js");
const { emailValidation, passwordEncrypt } = require("../utils/validator.js");

require("dotenv").config({ path: "../.env" });

function signup() {
  let user = new User({
    username:"jacky",
    email:emailValidation("jacyy@gmail.com"),
    password:passwordEncrypt("hello")
  });
  User.create(user.toJson());
}

signup();
