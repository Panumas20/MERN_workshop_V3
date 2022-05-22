const { json } = require("express");
const express = require("express");
const router = express.Router();
const { create } = require("../controller/blogController");

router.get("/", (req, res) => {
    res.json({
      data: "message from blog.js",
    });
  });
router.post("/blog", create);
module.exports = router;
