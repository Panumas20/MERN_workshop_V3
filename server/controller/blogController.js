const slugify = require("slugify");
const Blogs = require("../models/blogs");
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  switch (true) {
    case !title:
      return res.status(400).json({ error: "กรุณาป้อนชื่อบทความ" });
      break;
    case !content:
      return res.status(400).json({ error: "กรุณาป้อนเนื้อหาบทความ" });
      break;
  }
  Blogs.create({ title, content, author, slug }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    res.json(blog);
  });
};

// แสดงข้อมูลจาก DATABAST
exports.getAllblogs = (req, res) => {
  Blogs.find({}).exec((err, blogs) => {
    res.json(blogs);
  });
};

// Select blog
exports.singleBlog = (req, res) => {
  const { slug } = req.params;
  Blogs.findOne({ slug }).exec((err, blog) => {
    res.json(blog);
  });
};
