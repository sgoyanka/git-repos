// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {

	var age = [
        { name: 'Shanu', drunkness: 21 },
        { name: 'Sujay', drunkness: 21 },
        { name: 'nitesh', drunkness: 22 }
    ];

    res.render('pages/index',{
    	age : age 
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');
