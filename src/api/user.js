const { signup, login } = require("../service/userService");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
 await signup(username, email, password);
  res.json({ username, email, password });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
 await login(email, password);
  return res.json({email,password});
};
