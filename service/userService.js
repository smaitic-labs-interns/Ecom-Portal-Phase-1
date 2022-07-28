const UserSchema = require('../model/UserModel')
const {create} =  require('../database/UserDB')

exports.createUserService = ( username, email, password ) => {
  let user = new UserSchema({
    username,
    email,
    password,
  });
  create(user.toJson());
};
