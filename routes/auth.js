const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SEC_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    //   Checks if user eexists on the db
    const user = await User.findOne({ username: req.body.username });

    // if it does not
    !user && res.status(403).json("User does not exist");

    // decrypts password
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SEC_KEY
    ).toString(CryptoJS.enc.Utf8);

    // checks for password validity
    decryptedPassword !== req.body.password &&
      res.status(403).json("Invalid username or password");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "100d" }
    );

    const { password, ...others } = user._doc;
    res.status(201).json({ ...others, accessToken });

    // if (user) {
    //   if (req.body.password === decryptedPassword) {
    //     res.status(201).json("Login Sucessful");
    //   } else {
    //     res.status(403).json("Invalid username or password");
    //   }
    // } else {
    //   res.status(403).json("User does not exist");
    // }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
