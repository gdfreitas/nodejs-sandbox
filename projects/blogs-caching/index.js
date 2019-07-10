require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const redis = require('redis');
const redisClient = redis.createClient(process.env.REDIS_URI);
redisClient.on('error', function (err) {
  console.error('[redis-client] Error', err);
});

const Blog = require('./models/Blog');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    id: 'gdfreitas',
    name: 'Gabriel De Freitas'
  }

  next();
})

app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find({ _userId: req.user.id });

  res.send(blogs);
});

app.get('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findOne({
    _userId: req.user.id,
    _id: req.params.id
  });

  res.send(blog);
});

app.post('/api/blogs', async (req, res) => {
  const { title, content } = req.body;

  const blog = new Blog({
    title,
    content,
    _userId: req.user.id
  });

  try {
    await blog.save();
    res.send(blog);
  } catch (err) {
    res.send(400, err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port`, process.env.PORT);
})
