const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const uniqueId = uuid.v4();

class User {
  uniqueId
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
    this.uniqueId = uniqueId
    this.email = email;
    this.password = password;
    this.username = username;
  }

  toJson() {
    return {
      uniqueId: this. uniqueId,
      username: this.username,
      password: this.password,
      email: this.email,
    };
  }

  // static fromJson(data) {
  //   return User(data["email"], data["password"], data["username"]);
  // }

  static create(obj) {
    let user = readJson(process.env.USER_JSON);
    const exists = user.filter((user) => {
      return user.email == obj.email;
    });
    if (exists.length == 0) {
      user.push(obj);
      console.log(user);
      try {
        writeFile(process.env.USER_JSON, user);
        return true;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Already registered please signin");
    }
  }

  static selectAll() {
    const user = readJson(process.env.USER_JSON);
    return user;
  }

  static selectOne(email) {
    let reader = readJson(process.env.USER_JSON);
    return reader.filter((user) => user.email === email);
  }
}


module.exports = User;
