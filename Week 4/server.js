if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Import models
const Post = require('./models/post');

// Define application
const app = express();

// Define DB Connection
mongodb://127.0.0.1:27017/ass4geogo
mongoose.connect('mongodb://127.0.0.1:27017/ass4geogo', { useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
        console.log(`MongoDB Connected`)
    })
    .catch(err => {
        console.log(`Database Error!!!`);
        console.log(err);
    })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  // handle the request for root route
  res.send({ ping: 'pong' })
})

// Operations: Create, Read, Update, Delete (CRUD)
app.post('/posts', function(req, res) {
  // Get values from request payload
  const title = req.body.title
  const author = req.body.author
  const content = req.body.content

  // Assign values to Post model
  var post = new Post();
  post.title = title
  post.author = author
  post.content = content

  // Save the post
  post.save(function(error, savedPost) {
    if(error) {
      // send error response
      res.status(500).send({ error: 'Unable to save Post '})
    } else {
      // send success response
      res.status(200).send(savedPost)
    }
  })
});

// Get list of all posts
app.get('/posts', function(req, res) {
  Post.find({}, function(error, posts) {
    if(error) {
      // send error response
      res.status(422).send({ error: 'Unable to fetch posts '})
    } else {
      // send success response
      res.status(200).send(posts)
    }
  })
})

// Tasks for you
// 1. Create API to get details of a single Post
app.get('/posts/:id', function(req, res) {
    const { id } = req.params;
    Post.findById(id, function(err, foundPost) {
        if(err) res.status(422).send({err: 'Unable to fetch post'})
        else res.status(200).send(foundPost)
    })
})
// 2. Create API to update a Post
app.put('/posts/:id', function(req, res) {
    const { id } = req.params;
    Post.findByIdAndUpdate(id, req.body, { runValidators: true, new: true }, function(err, updatedPost){
      if(err) res.send(500).send({err: 'Unable to update post'})
      else {
        res.status(200).send(updatedPost)
      }
    })

})
// 3. Create API to delete a Post
app.delete('/posts/:id', function(req, res) {
    const { id } = req.params;
    Post.findByIdAndDelete(id, function(err, deletedPost) {
        if(err) res.status(500).send({err: 'Unable to delete post'})
        else res.status(200).send('Post Deleted!')
    })
})

app.listen(3001, function() {
  console.log('Server is running at port 3001....')
})