const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI =
  'mongodb+srv://unbeatable:unbeatable123@cluster0.kdxyg.mongodb.net/unbeatable?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const locationSchema = new Schema({
  city: String,
  state: String,
  zip_code: Number,
});

const favoritesSchema = new Schema({
  id: { type: String, require: true },
  name: { type: String, require: true },
  image_url: { type: String, require: true },
  rating: { type: Number, require: true },
  price: { type: String, require: true },
  location: locationSchema,
});

module.exports = mongoose.model('Favorites', favoritesSchema);
