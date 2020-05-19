const express = require("express");
const router = express.Router();
const User = require("../models/User");

// include CLOUDINARY:
const uploader = require("../configs/cloudinary-setup");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  const userId = req.user._id;
  User.findByIdAndUpdate(
    userId,
    { image_url: req.file.secure_url },
    { new: true }
  )
    .then((user) => {
      res.json({ image_url: user.image_url });
      //res.json({ secure_url: req.file.secure_url });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
