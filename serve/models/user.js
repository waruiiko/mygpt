const mongoose = require('mongoose');

// 定义用户模型
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  password: {
    type: String,
    // required: true
  }
});

// 创建用户模型
const User = mongoose.model('User', userSchema);

// 导出用户模型
module.exports = User;