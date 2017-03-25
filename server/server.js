const path = require('path');
const express = require('express');
const hbs = require('hbs');

const publicPath = path.join(__dirname + './../public');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index.hbs');
});
app.listen(port, () => {
    console.log('Server is up and tunning on port 3000');
})

