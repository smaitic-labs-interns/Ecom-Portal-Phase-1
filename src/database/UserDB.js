const { readJson, writeFile } = require("../utils/fileHandling");
const { emailValidation } = require("../utils/validator");
const User = require("../model/UserModel");

exports.create = async (user) => {
  try {
    const existsEmail = await User.findOne({ email: user.email });
    console.log(existsEmail, "ssss");
    if (!emailValidation(user.email) || existsEmail) {
      console.log("email already exists");
    } else {
      await User.create(user);
    }
  } catch (error) {
    throw error;
  }
};

exports.selectOne = async (email) => {
  let reader = await User.findOne({ email });
  return reader;
};
