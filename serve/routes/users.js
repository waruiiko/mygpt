const express = require("express");
const router = express.Router();
const axios = require("axios");
// var cors = require('cors')
// 导入所需的模型
const User = require("../models/user");
const { Stream } = require("stream");

// 定义路由
router.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.post("/users", (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user
    .save()
    .then((savedUser) => res.json(savedUser))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Bad request" });
    });
});

//chatGPT
const openaiApi = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    // "Content-Type": "text/event-stream",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

// router.post("/completions", async (req, res) => {
//   console.log("req.body", req.body);
//   try {
//     const response = await openaiApi.post(
//       "/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful assistant.",
//           },
//           { role: "user", content: req.body.message },
//         ],
//         stream: true,
//       },
//       {
//         responseType: "stream",
//       }
//     );
//     // console.log("response", response);
//     response.data.pipe(res);
//     // console.log(res)
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

router.post("/completions", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const response = await openaiApi.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        { role: "user", content: req.body.message },
      ],
    });
    console.log("response", response);
    res.send(response.data);
    // response = await res.json();
    // const result = response.choices[0].text;
    // console.log(res)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});
// router.post("/completions", async (req, res) => {
//   console.log("req.query", req.query);
//   try {
//     res.set({
//       "Cache-Control": "no-cache",
//       "Connection": "keep-alive",
//     });

//     const response = await openaiApi.post(
//       "/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content: "You are a helpful assistant.",
//           },
//           { role: "user", content: req.query.message },
//         ],
//       },
//     );
//     // response.data.pipe(res);
//     //  res=response.data;
//     console.log(response.data)
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// 导出路由
module.exports = router;
