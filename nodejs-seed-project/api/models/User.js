const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: Number,
    required: true,
    min: 0
  });

mongoose.model('User', UserSchema);
