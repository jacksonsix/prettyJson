var url = require("url");

 function endTransaction(response,header,data){	  
  if(header['content-type'] && header['content-type'].indexOf('text/html') != -1){
	  response.writeHead(200, {
		//'Set-Cookie': 'mycookie=test',
		'Content-Type': 'text/html'
	  }); 
	  response.end(data);
  }
  else{
	  response.writeHead(200, {				
		'Content-Type': header['content-type']
	  });
	  response.end(data);  
  }  	
}

function beginTransaction(request, response,getService,postService){
	var url_parts = url.parse(request.url);
    console.log(url_parts.path);
	var body ='';
	var cookie ={};
	var header ={};
	//request.headers["x-citiportal-loginid"] = "jl66782";
	request.on('data', (chunk) => {
	  body = body + chunk;	  
	  console.log('request with body');
	}).on('end', () => {	
	   console.log(body);	  
	   request.post_data = body;
	   console.log('end request body');	   
	      
	   if(request.method ==='GET'){
			// call service here
			getService(cookie,request,function(header,data){
				  console.log('local sucess--');		
				  endTransaction(response,header,data); 
		   });
		   
	   }else if(request.method ==='POST'){
		  postService(cookie,request,function(header,data){
			 console.log('post sucess--');	
			 endTransaction(response,header,data);   
		 });
	   }
   });	   
 }
 
 module.exports ={
	 beginTransaction: beginTransaction,
	 endTransaction: endTransaction
 }
 
 

