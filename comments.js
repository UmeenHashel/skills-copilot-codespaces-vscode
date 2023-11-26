// create web server
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comments = require('../models/comments.js');

// GET all comments
router.get('/', function(req, res, next) {
  Comments.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// GET comments by id
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// POST comments
router.post('/', function(req, res, next) {
  Comments.create(req.body, function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// PUT comments
router.put('/:id', function(req, res, next) {
  Comments.findByIdAndUpdate(req.params.id, req.body, function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// DELETE comments
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, req.body, function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

module.exports = router;


