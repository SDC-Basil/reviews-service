const Review = require('./model');

module.exports = {
  getAllReviews: (productId) => {
   return Review.find({product_id: Number(productId)});
  },
  getReviewsMeta: (productId) => {
    return Review.findOne({product_id: productId});
  },
  postReview: (productId, rating, summary, body, recommend, name, email, photos, characteristics) => {
    review = new Review({
      review:product_id,
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
    Review.findOneAndUpdate({product_id: productId}, {reviews: [...reviews, review]})
  }
}
