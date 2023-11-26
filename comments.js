// create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// const axios = require('axios');

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

// routes
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// create comment
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex'); // generate random id
  const { content } = req.body; // get content from request body
  const comments = commentsByPostId[req.params.id] || []; // get comments from post id

  comments.push({ id: commentId, content, status: 'pending' }); // push comment to comments

  commentsByPostId[req.params.id] = comments; // set comments to commentsByPostId

  res.status(201).send(comments); // send response
});

// listen to port
app.listen(4001, () => {
  console.log('Listening on 4001');
});