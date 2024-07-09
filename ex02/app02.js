var http = require('http');
var fs = require('fs');

var port = 9090;
server = http.createServer(function(req, res){
    console.log(req.url);

    if(req.url === '/'){
        req.url = '/index.html';
    }

    fs.readFile(__dirname + '/public' + req.url, function(error, data){   // callback 형식
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
    });

    res.end(data);
});

// 서버실행
server.listen(port, function(){
    console.log('server: starts... [' + port + ']');
});