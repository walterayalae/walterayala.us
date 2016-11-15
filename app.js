var express = require('express'), 
    http = require('http'), 
    path = require('path');
    

var app = express();


    app.set('port', process.env.PORT || 8080);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')));

// Render our home page with all blog posts
app.get('/', function(request, response) {
        
            response.render('index')
        
});

// // Render a form to enter a new post
// app.get('/new', function(request, response) {
//     response.render('new', {});
// });

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
