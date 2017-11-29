var express = require('express');
var app = express();
var config = require("./config.json");
//data
var articles = require("./mock/articles.js")
var carousel = require("./mock/carousel.js")
var categorys = require("./mock/categorys.js")
var hotTopics = require("./mock/hotTopics.js")
var topics = require("./mock/topics.js")


app.use(express.static('./src/app'));
app.use(express.static('./dist'));
app.use(express.static('./../jianshu'));

app.get('/', function (req, res) {
  res.sendFile('index.html',{root:'./src/app'});
});
app.get('/topic', function (req, res) {
  res.send(topics.topics);
});
app.get('/articles', function (req, res) {
  res.send(articles.articles);
});
app.get('/carousel', function (req, res) {
  res.send(carousel.carousels);
});






app.listen(config.port, function () {
  console.log('server run port is '+config.port);
});
