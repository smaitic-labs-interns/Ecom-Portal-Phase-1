const User = require("../model/UserModel.js");
const { emailValidation } = require("../utils/validator.js");
const { createUserService } = require("../service/userService");
require("dotenv").config({ path: "../.env" });

function signup() {
  const { email, username, password } = {
    email: emailValidation("jerry123@gmail.com"),
    username: "james",
    password: "asdfwsdf",
  };

  createUserService({ email, username, password });
}

signup();
