// routes/api.js

var fs = require('fs');

// Get Posts
exports.hi = function(req, res) {
  fs.writeFile('./imgs/' + 'out' + req.body.index + '.png', req.body.imageData, 'base64', function(err) {
    console.log(err);
  });
  res.send({success: 'true'});
};
