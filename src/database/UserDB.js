const { readJson, writeFile } = require("../utils/fileHandling");
const { emailValidation} = require('../utils/validator')
const User = require('../model/UserModel')



exports.create = async (user) => {
  try{
    const existsEmail = await User.findOne({email:user.email})
    console.log(existsEmail,'ssss');
    if(!emailValidation(user.email) || existsEmail){
      console.log('email already exists');
      
    }
    else{
  await User.create(user)
    }
  // let user = await readJson(process.env.USER_JSON);
  // const exists = user.filter((user) => {
  //   return user.email == obj.email;
  // });
  // if (exists.length == 0) {
  //   user.push(obj);
  //   console.log(user);
  //   writeFile(process.env.USER_JSON, user);
  //   return true;
  // } else {
  //   console.error("Already registered please sign in");
  // }
}
  catch(error){
    throw error
  }
};
// exports.selectAll = async() => {
//   const user = await readJson(process.env.USER_JSON);
//   return user;
// };
exports.selectOne = async (email) => {
  let reader = await User.findOne({email})
  return reader
};

// exports.selectOne = async (email) => {
//   let reader = await readJson(process.env.USER_JSON);
//   return reader.filter((user) => user.email === email);
// };
// exports.selectPassword = (password) => {
//   let readPassword = readJson(process.env.USER_JSON);
//   return readPassword.filter((user) => user.password === password);
// }
