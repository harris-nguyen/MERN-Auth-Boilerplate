const express = require("express");
const router = express.Router();

const { signup, accountActivation, signin, googleLogin } = require("../controllers/auth");

const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account-activation", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

router.post("/google-login", googleLogin);

module.exports = router;
