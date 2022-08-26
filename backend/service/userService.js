const User = require("../model/UserModel");
const { create, selectOne } = require("../database/UserDB");
const { passwordEncrypt } = require("../utils/validator");
const bcrypt = require("bcrypt");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
require("dotenv").config({ path: "../.env" });


exports.signup = async (username, email, password) => {
  try {
    let user = new User({
      username: username,
      email: email,
      password: passwordEncrypt(password),
    });
    console.log(user);
    await create(user);
  } catch (error) {
    throw error;
  }
}


exports.login = async(email,password) => {
  try {
  
    let user = await selectOne(email);
    console.log(user);
    if (user && bcrypt.compareSync(password, user.password))
      console.log("you are logged in");
    else console.log("email or password invalid");
  } catch (error) {
    throw error;
  }
}


