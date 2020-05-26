const express = require("express");
const router = express.Router();

const { signup, accountActivation, signin, googleLogin, facebookLogin } = require("../controllers/auth");

const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

router.post("/google-login", googleLogin);
router.post("/facebook-login", facebookLogin);

module.exports = router;
