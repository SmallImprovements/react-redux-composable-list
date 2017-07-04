var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');

app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(process.env.PORT || 5000);
