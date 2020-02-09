const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/reddit',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const redditSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  upVote: {
    type: Number,
    required: true
  },
  downVote: {
    type: Number,
    required: true
  }
});

const redditModel = mongoose.model('redditModel', redditSchema);

module.exports = redditModel;