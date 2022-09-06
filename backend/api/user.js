const {signupService, loginService } = require("../service/userService");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
 await signupService(username, email, password);
  res.json({ username, email, password });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
 await loginService(email, password);
  return res.json({email,password});
};
