var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function(){
  console.log('mongod connected')
});

module.exports = mongoose;