const UserSchema = require("../model/UserModel");
const { create } = require("../database/UserDB");
const { passwordEncrypt } = require('../utils/validator');
require("dotenv").config({ path: "../.env" });

function signup() {
  let user = new UserSchema ({
    username: "hari",
    email: "hari@gmail.com",
    password:passwordEncrypt("nice")
  });

  create(user);
}

signup();
