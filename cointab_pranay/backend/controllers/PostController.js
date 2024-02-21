
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch);

const Post = require('../models/Post');

exports.getPostsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await response.json();
    
    res.json(postsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.bulkAddPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await response.json(); 
    const insertedPosts = await Promise.all(postsData.map(async (post) => {
      const { title, body } = post;
      return await Post.create({ userId, title, body });
    }));
   
    res.json(insertedPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};