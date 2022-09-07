const User = require("../model/UserModel");
const { create, selectOne } = require("../database/UserDB");
const {isEmpty, passwordEncrypt } = require("../utils/validator");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../.env" });


exports.signupService = async (username, email, password) => {
  try {
    let user = new User({
      username: username,
      email: email,
      password: passwordEncrypt(password),
    });
    console.log(user);
    if(!isEmpty(username) &&
      !isEmpty(password) &&
      !isEmpty(email) ){
        await create(user);
      }
  } catch (error) {
    throw error;
  }
}


exports.loginService = async(email,password) => {
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


