const express = require('express');
const eventController = require('../controllers/eventController.js');

const router = express.Router();

// router to get data from yelp API, only respond to client with 3 results
router.post('/search', eventController.getRestaurants, (req, res) => {
  res.status(200).json(res.locals.searchResults);
});
// router to get and display all data (all favorites) from our database
router.get('/favorites', eventController.getFavorites, (req, res) =>
  res.status(200).json(res.locals.favorites)
);
// router to post to our database the response from client; their fav choice
router.post('/add', eventController.postFavorite, (req, res) =>
  res.status(200).json(res.locals.newFavorite)
);

// router to delete a favorite from the database
router.delete(
  '/delete',
  eventController.deleteFavorite,
  eventController.getFavorites,
  (req, res) => res.status(200).json(res.locals.favorites)
);

module.exports = router;
