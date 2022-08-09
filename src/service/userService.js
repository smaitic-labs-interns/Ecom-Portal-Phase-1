const UserSchema = require("../model/UserModel");
const { create, selectOne } = require("../database/UserDB");
const bcrypt = require("bcrypt");
const {mongoConnect} =require('../connectDatabase/mongoConnect')
require("dotenv").config({ path: "../.env" });

mongoConnect()

async function signup() {
  try{
  let user = new UserSchema({
    username: "hari",
    email: "myself@gmail.com",
    password: "nice",
  });
  console.log(user);
    await create(user);
}catch(error){
  throw error
}
}
// signup();

async function login() {
  try {
    let email = "new@gmail.com";
    let password = "nice";
    let user = await selectOne(email);
    // console.log(user)
    if (user && bcrypt.compareSync(password, user[0].password))
      console.log("you are logged in");
    else console.log("password invalid credential");
  } catch (error) {
  throw error
  }
}


// login();


