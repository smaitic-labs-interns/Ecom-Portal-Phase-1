const User = require("../model/UserModel")

exports.createUserService = ({ username, email, password }) => {
  let user = new User({
    username ,
    email,
    password,
  });
  User.create(user.toJson());
};
