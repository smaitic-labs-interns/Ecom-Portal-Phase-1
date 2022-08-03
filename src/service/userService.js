const UserSchema = require("../model/UserModel");
const { create, selectOne } = require("../database/UserDB");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../.env" });

function signup() {
  try{
  let user = new UserSchema({
    username: "hari",
    email: "new@gmail.com",
    password: "nice",
  });
    create(user);
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


login();


