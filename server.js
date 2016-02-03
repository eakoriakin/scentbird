var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    friendsFile = path.join(__dirname, '/build/friends.json');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/build'));

// Set views directory.
app.set('views', __dirname + '/build');

// Set routes.
app.get('/', function (request, response) {
    response.render('index');
});

app.get('/api/friends', function (request, response) {
    fs.readFile(friendsFile, function (error, data) {
        if (error) {
            console.error(error);
            process.exit(1);
        }

        response.json(JSON.parse(data));
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});