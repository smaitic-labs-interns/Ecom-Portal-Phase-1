const User = require("../model/UserModel.js");
const { emailValidation } = require("../utils/validator.js");

function signup() {
  if (emailValidation("abcd@gmail.com")) {
    const user = new User({
      email: email,
      password: "",
      username: "james",
    });

    User.create(user.toJson());
  }

  console.log(user);
}

signup();

const user = {
  username: "jerry",
  email: "jerry@gmail.com",
  password: "asdgjlsa",
};
