const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// import 'dotenv/config'
require("dotenv").config();


//解决跨域问题(跨域问题需要优先解决，因此放在代码最开始的地方)
var cors = require("cors");
app.use(cors());

// 连接到MongoDB数据库
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mygpt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// 添加中间件来解析请求体
app.use(express.json());




// 导入路由
const routes = require("./routes/users");

// 使用路由
app.use("/api", routes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/api", function (req, res, next) {
//   res.json({ msg: "ha!" });
// });
app.use(express.json());
// app.use(express.static('./'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 启动服务器
const port = 3100;

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
