const mongoose = require('mongoose');

const uri = 'mongodb+srv://root:root@revelationary.rnyzipd.mongodb.net/revelationary?retryWrites=true&w=majority&appName=revelationary';

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });