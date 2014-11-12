var express = require('express');
var app = express();

var routes = require('./handlers')

app.get('/', routes.index)
app.get('/hey', routes.hey)
app.get('*', routes.walou)

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function () {
    console.log('eh bah voila sa marche au port ' + app.get('port'))
})
