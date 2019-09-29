const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`,
  { useNewUrlParser: true })
  .then(
    () => console.log('Connection established.'),
    () => console.log('Connection failed.')
  );

module.exports = mongoose;
