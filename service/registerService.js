const UserSchema = require("../model/UserModel");
const { create } = require("../database/UserDB");
require("dotenv").config({ path: "../.env" });

function signup() {
  let user = new UserSchema ({
    username: "hari",
    email: "any@gmail.com",
    password:"nice"
  });

  create(user);
}

signup();
