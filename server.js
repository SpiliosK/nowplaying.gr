// server.js

// ----- call the packages we need


//not to be confused with require.js, this is something like node's equivalent to python's import:
var express = require('express');
var app = express(); // define the app using express
var path = require('path');

// ----- set our port

var port = process.env.PORT || 8080;

// ----- set our routes

var router = express.Router(); // get an instance of the express Router

app.use(function(req, res, next) {

    if (path.extname(req.path).length > 0) {
        // normal static file request
        next();
    }

    else {

        // should force return `index.html` for backbone.js
        req.url = '/player.html';
        next();
    }

});

app.use('/', express.static(__dirname));

// ----- start the server

app.listen(port);
console.log('Express server listening on port ' + port);
