const createError = require("../utils/createError");

exports.register = (req, res, next) => {
  //code
  // Step 3 Check already
  // Step 4 Encrypt bcrypt
  // Step 5 Insert to DB
  // Step 6 Response
  try {
    // Step 1 req.body
    const { email, firstname, lastname, password, confirmPassword } = req.body;
    // console.log(email, firstname, lastname, password, confirmPassword);

    // Step 2 validate
    if (!email) {
      return createError(400, "Email is require");
    }
    if (!firstname) {
      return createError(400, "First Name is require" );
    }
    if (!lastname) {
      return createError(400, "Last Name is require" );
    }
    if (!password) {
      return createError(400, "Password is require" );
    }
    if (password !== confirmPassword) {
      return createError(400, "Password is not the same" );
    }

    res.json({ message: "hello its me" });
  } catch (error) {
    next(error);
  }
};

exports.login = (req, res, next) => {
  //
  try {
    res.json({ message: "Hello Login!" });
  } catch (error) {
    next(error);
  }
};
