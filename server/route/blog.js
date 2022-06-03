const { json } = require("express");
const express = require("express");
const router = express.Router();
const {
  create,
  getAllblogs,
  singleBlog,
  remove,
} = require("../controller/blogController");

router.get("/", (req, res) => {
  res.json({
    data: "message from blog.js",
  });
});

router.get("/blogs", getAllblogs);
router.post("/create", create);
router.get("/blog/:slug", singleBlog);
router.delete("/blog/:slug", remove);

module.exports = router;
