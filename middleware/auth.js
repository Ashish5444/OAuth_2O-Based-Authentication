const jwt = require("jsonwebtoken");

module.exports.isAuth = async (req, res, next) => {
  if (req.user){
    next();
  }
  else {
    return res.json({
      success : false ,
      message : "you must login"
    })
  }
};
  