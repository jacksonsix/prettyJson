// node --inspect testService.js

var  pretty = require('./prettymachine.js');
var  handler = require('./clientRequest.js');

var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
 

 
debug('booting %o', name);
function trace(info){
	console.log(info);
}

function createPage(page){
	var str ='';
	str += page.html[0];
	str += page.head[0];
	//head element here
	for(var i=0;i<page.head_element.length;i++){
		str += page.head_element[i];
	}
	//	
	str += page.head[1];
	str += page.body[0];
	//element here
	for(var i=0;i<page.element.length;i++){
		str += page.element[i];
	}
	//
	str += page.body[1];
	str += page.html[1];
	return str;
} 
function addElement(page,element){
	page.element.push(element);
	return page;
}
function addHeadElement(page,element){
	page.head_element.push(element);
	return page;
}
 
function getService(cookie,request,next){
  var body ={};
  var page = {
	  html: ['<!DOCTYPE html><html lang="en">','</html>'],
	  head: ['<head>','</head>'],
	  body: ['<body>','</body>'],	 
	  element:[],
	  head_element:[] 	  
  };
  var inp =  '<input id="pad" type="text" name="lname"><br>';
  var button = '<input type="submit" value="Submit" onclick="send()">';
  var scr = "<script>function send(){var url ='http://localhost:3000'; $.ajax({  type: 'POST',  url: url,  data: $('#pad')[0].value,  success: function(data){ document.getElementById('format').innerHTML =data;  }, dataType: 'json'});}</script>";
  var allelements = inp + button + scr + '<p id ="format">new one</p>';
  page = addHeadElement(page,'<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="\
  crossorigin="anonymous"></script>');
  var ht =createPage(addElement(page,allelements));
  var header ={};
  next(header,ht);
}
 
function postService(cookie,request,next){
	 var body ={};
	 var text = request.post_data;
	 var header ={'content-type':'application/json;charset=UTF-8'};
	 var result = pretty(text);
	 trace(result);
	 next(header,result);
 } 
 
http.createServer(function(req, res){
  trace(req.method + ' ' + req.url); 
  handler.beginTransaction(req,res,getService,postService);
 
}).listen(3000, function(){
  trace('listening 3000');
});


