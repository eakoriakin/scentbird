// Modules.
var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    liveReload = require('connect-livereload'),
    express = require('express'),
    liveReloadServer = require('tiny-lr')(),
    minifyCss = require('gulp-minify-css'),
    fs = require('fs'),
    path = require('path'),
    friendsFile = path.join(__dirname, '/build/friends.json');

// Parameters.
var livereloadPort = 35729,
    serverPort = 5000;

// Set up an express server.
var server = express();

// Add live reload.
server.use(liveReload({ port: livereloadPort }));

// Use 'build' folder as root.
server.use(express.static('./build'));

server.get('/api/friends', function (request, response) {
    fs.readFile(friendsFile, function (error, data) {
        if (error) {
            console.error(error);
            process.exit(1);
        }

        response.json(JSON.parse(data));
    });
});

// JS.
gulp.task('js', function () {
    gulp.src('source/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'));
});

// CSS.
gulp.task('css', function () {
    gulp.src('source/**/*.less')
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/css'));

    gulp.src('source/fonts/**/*')
        .pipe(gulp.dest('build/fonts'));
});

// Images.
gulp.task('images', function () {
    gulp.src('source/**/*.png')
        .pipe(gulp.dest('build/'));
});

// Views.
gulp.task('views', function () {
    gulp.src('source/index.html')
        .pipe(gulp.dest('build/'));
});

// Friends file.
gulp.task('friendsFile', function () {
    gulp.src('source/friends.json')
        .pipe(gulp.dest('build/'));
});

// Watchers.
gulp.task('watch', function () {
    // JS.
    gulp.watch(['source/**/*.js'], [
        'js'
    ]);

    // CSS.
    gulp.watch(['source/**/*.less'], [
        'css'
    ]);

    // Images.
    gulp.watch(['source/**/*.png'], [
        'images'
    ]);

    // Views.
    gulp.watch(['source/index.html'], [
        'views'
    ]);

    // friendsFile.
    gulp.watch(['source/friends.json'], [
        'friendsFile'
    ]);
});

// Build.
gulp.task('build', ['js', 'css', 'views', 'friendsFile', 'images']);

gulp.task('start', function () {
    // Start web server.
    server.listen(serverPort);

    // Start live reload.
    liveReloadServer.listen(livereloadPort);

    // Run the watch task, to track changes.
    gulp.start(['build', 'watch']);
});