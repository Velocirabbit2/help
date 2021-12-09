'use strict';

const mongoose = require('mongoose');
const axios = require('axios');
const Favorites = require('../models/FavoritesModel.js');
const yelp = require('yelp-fusion');
const client = yelp.client(
  'DRJa46ZYQp2Cl5QiiTuwWWK5fBQPYNJShLerMC_ywhRYQKvzgxDXRerR7WjtPZWTjkUSUB9FXhmdoGvSxO6hJqk6JnnyXM2EodozdNr9fHbkukCpSjYXSoW1ghKxYXYx'
);

const eventController = {};

eventController.getRestaurants = (req, res, next) => {
  const { location } = req.body;
  client
    .search({
      location: location,
      sort_by: 'review_count',
      limit: 3,
    })
    .then((data) => {
      // console.log(data.jsonBody.businesses);
      res.locals.searchResult = data.jsonBody.businesses;
      return next();
    })
    .catch((err) => {
      console.log(
        'ERROR in eventController.getRestaurants: Something went wrong with the API call'
      );
      return next(err);
    });
};

eventController.getFavorites = (req, res, next) => {
  Favorites.find({}, (err, result) => {
    if (err) {
      console.log(
        'ERROR in eventController.getFavorites: Something went wrong with accessing database'
      );
      return next(err);
    } else {
      res.locals.favorites = result;
      return next();
    }
  });
};

// post method using async/await
eventController.postFavorite = async (req, res, next) => {
  const { food_id, name, image_url, rating, price, location } = req.body;
  const newFav = new Favorites({
    id: id,
    name: name,
    image_url: image_url,
    rating: rating,
    price: price,
    location: location,
  });
  try {
    const result = await newFav.save();
    res.locals.newFavorite = result;
    return next();
  } catch (err) {
    console.log(
      'ERROR in eventController.postFavorite: Something went wrong with writing to the database'
    );
    return next(err);
  }
};

eventController.deleteFavorite = (req, res, next) => {
  const id = { id: req.params.id };
  Favorites.findOneAndDelete(id, (err, result) => {
    if (err) {
      console.log(
        'ERROR in eventController.deleteFavorite: Something went wrong with deleting a document from the database'
      );
      return next(err);
    } else {
      return next();
    }
  });
};

module.exports = eventController;
