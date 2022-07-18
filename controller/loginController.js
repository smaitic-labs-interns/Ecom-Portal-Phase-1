const User = require("../model/UserModel");

function login() {
  let email = "abc@gmail.com";
  let password = "lasjdkh";
  let user = User.selectOne(email);
  console.log(user[0].password === password);
  if (user[0].password === password) {
    console.log("you are logged in");
  } else {
    console.log("password invalid credential");
  }
}
login();
