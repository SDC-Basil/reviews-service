var router = require('express').Router();
var controllers = require('./database/controllers.js');



router.get(`/reviews/:productId`, (req, res) => {
  const {productId} = req.params;
  return controllers.getReviewsMeta(productId).then((data) => {
    if (!data) {
      res.status(404).send('there are no reviews for this id')
      return;
    }
    var avg = 0;
    var ratings = {};
    var recommended = 0;
    var helpfulness = 0;
    var characteristics = {};
    var meta = [];
    data.reviews.map((review, i) => {
      if (review.recommend) {
        recommended += 1;
      }
      if (!ratings[review.rating]) {
        ratings[review.rating] = 1;
      } else {
        ratings[review.rating] += 1;
      }
        avg += review.rating;
        if (review.characteristics.length !== 0) {
          characteristics.id = review.review_id;
        }
      review.characteristics.map((character) => {
        var key = character.k;
        value = character.v;
        characteristics[key] = value;
        meta.push(characteristics);
      })
      characteristics = {};
    });

    res.send({product_id: data._id, averageRating: avg/ data.reviews.length - 1, helpfulness, recommended, ratings, meta});
  }).catch((err) => {
    console.log(err);
    res.status(500).send('there was an error in getting the reviews');
  })
})

router.post(`/reviews`, (req, res) => {
  let productId = req.query.productId;
  let rating = req.query.rating;
  let summary = req.query.summary;
  let body = req.query.body;
  let recommend = req.query.recommend;
  let name = req.query.name;
  let email = req.query.email;
  let photos = req.query.photos;
  let characteristics = req.query.characteristics;


  return controllers.postReview(productId, rating, summary, body, recommend, name, email, photos, characteristics).then(() => {

    res.status(201).send('successfully submitted new review');
  }).catch((err) => res.status(500).send('Could not add new review'))
})


module.exports = router;