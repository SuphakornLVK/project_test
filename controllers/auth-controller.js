exports.register = (req, res, next) => {
  //code
  try {
    res.json({ message: "hello its me" });
  } catch (error) {
    next(error)
  }
};

exports.login = (req, res, next) => {
  //
  try {
    res.json({ message: "Hello Login!" });
  } catch (error) {
    next(error)
  }
};
