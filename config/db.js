const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hubx6d', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;