const { default: axios } = require("axios");

exports.Signup = async (values) => {
  await axios
    .post("http://localhost:4000/signup", values)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.Signin = async (values) => {
   await axios
     .post("http://localhost:4000/login", values)
     .then((response) => {
       console.log(response);
     })
     .catch((error) => {
       console.log(error);
     });
}