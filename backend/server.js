const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. 中间件配置 (让前后端能够顺畅沟通)
app.use(cors()); 
app.use(express.json()); 

// 2. 数据库连接
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log('✅ 数据库连接成功！MongoDB Connected!'))
  .catch(err => console.log('❌ 数据库连接失败: ', err));

// 3. 定义数据模型 (告诉数据库你的作品集长什么样)
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  year: String,
  number: String,
  role: String,
  scope: String,
  stack: [String],
  description: String,
  challenge: String,
  // 核心：视觉系统部分
  visualSystem: {
    description: String,
    colors: [String], // 存储十六进制颜色代码
    fonts: [
      { name: String, type: String }
    ],
    mainImage: String // 对应视觉系统的大图 URL
  },
  // 详情页展示图集
  gallery: [String] 
});

// 使用模型创建 Project 集合
const Project = mongoose.model('Project', projectSchema);

// Contact 留言模型
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } // 自动记录留言时间
});
const Contact = mongoose.model('Contact', contactSchema);

// 4. 核心 API 接口 (供前端页面调用)

// 接口 A: 获取所有作品集的接口
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find(); // 从云端数据库抓取所有数据
    res.json(projects); 
  } catch (error) {
    res.status(500).json({ message: '获取数据失败' });
  }
});

// 新增：接收前端传来的留言并存入数据库
app.post('/api/contact', async (req, res) => {
  try {
    // 从前端发来的请求 (req.body) 中提取数据
    const { name, email, message } = req.body;

    // 创建一条新的数据库记录
    const newContact = new Contact({
      name,
      email,
      message
    });

    // 保存到 MongoDB
    await newContact.save();

    // 给前端返回成功信号
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error("❌ 留言保存失败:", error);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
});


// 5. 启动服务器
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 后端服务器正在运行，监听端口：http://localhost:${PORT}`);
});