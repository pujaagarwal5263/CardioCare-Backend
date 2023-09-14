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
  userReport: {
    age: Number,
    sex: String,
    chestPainType: String,
    restingBloodPressure: Number,
    serumCholesterol: Number,
    fastingBloodSugar: Number,
    restingElectrocardiographicResults: String,
    maxHeartRateAchieved: Number,
    exerciseInducedPain: String,
    stDepressionInducedByExercise: Number,
    slopeOfPeakExerciseSTSegment: String,
    numMajorVesselsColoredByFluoroscopy: Number,
    thaliumStressResult: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;