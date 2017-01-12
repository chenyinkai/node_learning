/*var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);*/

//将上面的匿名函数取出
/*function onRequest(request, response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Hello World");
  response.end();
}*/
//将服务器脚本放到一个叫做 start 的函数里，然后我们会导出这个函数
/*function start(){
	function onRequest(request, response){
	  response.writeHead(200,{"Content-Type":"text/plain"});
	  response.write("Hello World");
	  response.end();
	}
	http.createServer(onRequest).listen(8888);
}
exports.start = start;*/
var http = require("http");
var url = require("url");

function start(route,handle){
  function onRequest(request, response){
  	if(request.url!=="/favicon.ico"){//去掉烦人的favicon.ico加载
  		var pathname = url.parse(request.url).pathname;
	    console.log("Request for "+ pathname +" received.");

	    var content = route(handle,pathname);

	    response.writeHead(200,{"Content-Type":"text/plain"});
	    response.write(content);
	    response.end();
  	}
    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
