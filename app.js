const express = require('express');
const path = require('path');
const storage = require('node-persist');

// Call express() function
const app = express();
const router = express.Router();
var count = 0; // Declare count

// * Middleware
app.use(express.static('views'));

// * Router
router.get('/', function(req, res){
    res.render('index');
})

app.get('/count', function(req, res) {
    count++;
    storage.setItem('count', count)
    .then(function() {
        res.json(count)
    });
});

app.get('/pageCount', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/pageCount.html'));
})

app.get('/pageTimer', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/pageTimer.html'));
})

// app.all('/', function(req, res){
//     res.send("Hello World");
// });

storage
    .init()
    .then(() => storage.getItem('count'))
    .then((value) => {
        if(value > 0) {
            count = value;
        } else {
            count = 0;
        }
    });

// Server 
app.listen(8080, function(){
    console.log('Server is Ongoing');
});