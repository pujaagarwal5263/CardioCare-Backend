const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  subject: String,
  body: String,
  recipient_array: [
    {
      name: String,
      email: String,
    },
  ],
  scheduledAt: Date, 
});

const userSchema = new mongoose.Schema({
  email: String, // User's email ID
  accessToken: String, // User's access token
  starredEmails: [emailSchema], // Array of starred emails
  scheduledEmails: [emailSchema], // Array of scheduled emails
});

const User = mongoose.model('User', userSchema);

module.exports = User;