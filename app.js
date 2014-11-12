var express = require('express');
var app = express();

var routes = require('./handlers')

app.get('/', routes.index)
app.get('/hey', routes.hey)
app.get('*', routes.walou)

var server = app.listen(3000, function () {
    console.log('eh bah voila sa marche au port 3000')
})
