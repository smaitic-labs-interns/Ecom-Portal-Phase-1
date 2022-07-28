// const UserSchema = require("..//UserDB.js");
const { createUserService } = require("../service/userService.js");
const { emailValidation, passwordEncrypt } = require("../utils/validator.js");
require("dotenv").config({ path: "../.env" });

function signup() {
  const {username, email, password} = {
    username: "jacky",
    email: emailValidation("jac@gmail.com"),
    password: passwordEncrypt("hello")
  };
  console.log(email)
  createUserService(username,email,password);
}

signup();
