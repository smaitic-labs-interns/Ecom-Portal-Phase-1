const bcrypt = require("bcrypt");

exports.emailValidation = (email) => {
  const ergx = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  );
  if (ergx.test(email)) {
    return email;
  }
  throw "invalid email";
};

exports.isEmpty = (value) => {
  if (value === null || value === "" || value === 0) {
    throw "this field is required";
  }
  return false;
};

exports.passwordEncrypt = async (password) => {
  let salt = await bcrypt.genSalt(10);
  let encryptedpassword = await bcrypt.hash(password, salt);
  if (!encryptedpassword) {
    throw "password is not encrypted";
  }
  return encryptedpassword;
};
