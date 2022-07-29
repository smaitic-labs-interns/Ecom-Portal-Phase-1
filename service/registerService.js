const UserSchema = require("../model/UserModel");
const { create } = require("../database/UserDB");
require("dotenv").config({ path: "../.env" });

function signup() {
  let user = new UserSchema ({
    username: "jacky",
    email: "jsadfac@gmail.com",
    password:"hello"
  });

  create(user);
}

signup();
