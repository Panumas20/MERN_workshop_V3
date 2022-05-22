const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const blogRoute = require("./route/blog")

const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//connect DB
mongoose
  .connect(process.env.DATABAST, {
    useNewUrlParser:true,
    useUnifiedTopology:false,
  })
  .then(() => console.log("connect DATABASE success"))
  .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// app.get("*", (req, res) => {
//   res.json({
//     data: "Mess from server",
//   });
// });

//route
app.use('/api',blogRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`run server on ${port}`));
