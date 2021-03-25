const Review = require('./model');

module.exports = {
  getAllReviews: (productId) => {
   return Review.findById({_id: productId});
  },
  getReviewsMeta: (productId) => {
    return Review.findById({_id: productId});
  },
  postReview: (productId, rating, summary, body, recommend, name, email, photos, characteristics) => {
    review = new Review({
      review_id,
      rating: rating,
      date: { type: Date, default: Date.now },
      summary: summary,
      body: body,
      recommend: recommend,
      reported: reported,
      reviewer_name: reviewer_name,
      reviewer_email: reviewer_email,
      helpfulness: helpfulness,
      characteristics: characteristics
    })
    Review.findOneAndUpdate({_id: productId}, {reviews: [...reviews, review]})
  }
}
