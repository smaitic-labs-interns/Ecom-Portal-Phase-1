const {selectOne} = require("../database/UserDB");
require("dotenv").config({ path: "../.env" });
const {passwordCompare} = require('../utils/validator')


function login() {
  let email = "jsadfac@gmail.com";
  let password = "hello";
  let user = selectOne(email);
    if (user[0].password === passwordCompare(password)) {
    console.log("you are logged in");
  } else {
    console.log("password invalid credential");
  }
}
login();
