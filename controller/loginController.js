const User = require("../services/UserService");
require("dotenv").config({ path: "../.env" });


function login() {
  let email = "puransir@gmail.com";
  let password = "asdfwsdf";
  let user = User.selectOne(email);
    if (user[0].password === password) {
    console.log("you are logged in");
  } else {
    console.log("password invalid credential");
  }
}
login();
