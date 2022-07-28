const uuid = require("uuid");
const userId = uuid.v4();

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
    this.email = email;
    this.password = password;
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
