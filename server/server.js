var express = require('express');
var path = require("path");
var app = express();
var config = require("./config.json");
//data
var articles = require("./mock/articles.js")
var carousel = require("./mock/carousel.js")
var categorys = require("./mock/categorys.js")
var hotTopics = require("./mock/hotTopics.js")
var topics = require("./mock/topics.js")
var topicDetails = require("./mock/topicTags.js")


var root = path.join(__dirname,"../")
console.log(root);

app.use(express.static(root));

app.get('/', function (req, res) {
  res.sendFile('index.html',{root:"./src/app"});
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
app.get('/hotTopic', function (req, res) {
  var all = JSON.stringify(hotTopics.hotTopics);
  var data = JSON.parse(all);
  var showTopics = [];
  while (true) {
    if(data.length==0){
      data = JSON.parse(all);
    }
    var num = getRamdom(data.length);
    showTopics.push(data.splice(num,1)[0]);
    if(showTopics.length==8){
      break;
    }
  }
  function getRamdom(max){
    return Math.floor(Math.random()*max)
  }
  res.send(showTopics);
});
app.get('/category', function (req, res) {
  res.send(categorys.categorys);
});
app.get('/topicDetails/:id', function (req, res) {

  var id = req.params.id;
  console.log(id);
  var description = {}
  for(var i=0,il=topics.topics.length;i<il;i++){
    var current = topics.topics[i];
    console.log("current.id:"+current.id)
    if(current.id==id){
      description.name = current.name;
      description.avator = current.url;
      break;
    }
  }
  res.send({info:description,tags:topicDetails});


});






app.listen(config.port, function () {
  console.log('server run port is '+config.port);
});
