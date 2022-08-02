const uuid = require("uuid");
const userId = uuid.v4();
const {emailValidation, passwordEncrypt } = require('../utils/validator')

class UserSchema {
  userId;
  email;
  password;
  username;
  constructor({ email = null, password = null, username = null }) {
    if (
      email === null ||
      password === null ||
      password === "" ||
      email === ""
    ) {
      throw "all field is required";
    }
    this.userId = userId;
    this.email = emailValidation(email);
    this.password = passwordEncrypt(password);
    this.username = username;
  }

  toJson() {
    return {
      userId: this.userId,
      username: this.username,
      password: this.password,
      email: this.email,
    };
  }

  // static fromJson(data) {
  //   return User(data["email"], data["password"], data["username"]);
  // }
}

module.exports = UserSchema;
