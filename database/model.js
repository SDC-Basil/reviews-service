const mongoose = require('mongoose');

const review = mongoose.Schema({
  _id: {type: Number, required: true, index: true },
  reviews: [
    {
      review_id: {type: Number, unique: true, index: true},
      rating: Number,
      date: { type: Date, default: Date.now },
      summary: String,
      body: String,
      recommend: Boolean,
      reported: Boolean,
      reviewer_name: {type: String, required: true},
      reviewer_email: {type: String, required: true},
      helpfulness: Number,
      characteristics: [{
        k: String,
        v: Number
      }]
    }
  ]
}, {collection: '4.2'});

const Review = mongoose.model('Review', review);


module.exports = Review;