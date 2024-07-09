var http = require('http');

var port = 9090;
var server = http.createServer(function(req, res){
    
    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    res.end('<h1>Hello World</h1>');
});

// 서버실행
server.listen(port, function(){
    console.log('server: starts... [' + port + ']');
});