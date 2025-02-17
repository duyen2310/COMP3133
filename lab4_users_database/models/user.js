const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, 'City must contain only letters and spaces'],
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, 'Invalid ZIP code format'],
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: {
    type: String,
    required: true,
    match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format'],
  },
  website: {
    type: String,
    required: true,
    match: [/^(https?:\/\/)[\w.-]+(\.[a-z]{2,})+$/, 'Invalid website URL'],
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

module.exports = mongoose.model('User', userSchema);
