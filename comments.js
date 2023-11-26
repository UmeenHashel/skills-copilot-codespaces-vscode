// create web server

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Add comment
router.post('/add', (req, res, next) => {
    let newComment = new Comment({
        comment: req.body.comment,
        username: req.body.username
    });

    Comment.addComment(newComment, (err, comment) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add comment' });
        } else {
            res.json({ success: true, msg: 'Comment added' });
        }
    });
});

// Get all comments
router.get('/all', (req, res, next) => {
    Comment.getAllComments((err, comments) => {
        if (err) throw err;
        res.json(comments);
    });
});

// Get comment by ID
router.get('/:id', (req, res, next) => {
    Comment.getCommentById(req.params.id, (err, comment) => {
        if (err) throw err;
        res.json(comment);
    });
});

// Delete comment
router.delete('/:id', (req, res, next) => {
    Comment.deleteComment(req.params.id, (err, comment) => {
        if (err) throw err;
        res.json(comment);
    });
});

// Update comment
router.put('/:id', (req, res, next) => {
    let updatedComment = new Comment({
        comment: req.body.comment,
        username: req.body.username
    });

    Comment.updateComment(req.params.id, updatedComment, (err, comment) => {
        if (err) throw err;
        res.json(comment);
    });
});

module.exports = router;

