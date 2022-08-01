const {selectOne, selectPassword} = require("../database/UserDB");
require("dotenv").config({ path: "../.env" });
const bcrypt = require('bcrypt')


function login() {
  try{
  let email = "james@gmail.com";
  let password = "nice"
  let user = selectOne(email);
  console.log(user)
    if(user &&(bcrypt.compareSync(password,user[0].password)))
    {
    console.log("you are logged in");
  } else {
    console.log("password invalid credential");
  }
}catch(error){
console.log(error)
}
}

login();
