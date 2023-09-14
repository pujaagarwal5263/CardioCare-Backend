const User = require('./userSchema');

// Assuming you have a MongoDB connection established

async function updateUsers() {
    try {
      const result = await User.updateMany({}, { $set: { userReport: {} } });
      console.log(`Updated ${result.modifiedCount} users`);
    } catch (err) {
      console.error(err);
    }
  }
  
  updateUsers();