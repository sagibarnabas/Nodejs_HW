const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/HUBX6D', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;