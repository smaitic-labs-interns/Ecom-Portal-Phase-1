const User = require("../model/UserModel");
const { create, selectOne } = require("../database/UserDB");
const { passwordEncrypt } = require("../utils/validator");
const bcrypt = require("bcrypt");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
require("dotenv").config({ path: "../.env" });

mongoConnect();

async function signup() {
  try {
    let user = new User({
      username: "ram",
      email: "ram@gmail.com",
      password: passwordEncrypt("good"),
    });
    console.log(user);
    await create(user);
  } catch (error) {
    throw error;
  }
}
signup();

async function login() {
  try {
    const { email, password } = {
      email: "hari@gmail.com",
      password: "nice",
    };

    let user = await selectOne(email);
    console.log(user);
    if (user && bcrypt.compareSync(password, user.password))
      console.log("you are logged in");
    else console.log("email or password invalid");
  } catch (error) {
    throw error;
  }
}

// login();
