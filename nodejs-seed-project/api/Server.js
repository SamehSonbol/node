var express = require('express'),
app = express(),
port = process.any.PORT || 3000;

app.listen(port);

mongoose = reqire('./api/models/Product'),
bodyParser = require ('body-parser');

mongoose.promise = flobal.promise;
mongoose.connect('mongodb;//localhost/Product');
app.use(bodyParser.json());

var route = require('.api/routes/index');
routes(app);
