var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var a = fs.readFileSync(__dirname+'/chat.html');
app.get('/',function(req,res){
    res.sendfile(__dirname+'/chat.html');
});

io.on('connection',function(socket){
    console.log('建立一个连接');
});


http.listen(3000,function(){
    console.log('启动成功');
});