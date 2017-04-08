var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();
// set up template engine
app.set('view engine', 'ejs');
//設定靜態檔案目錄
app.use(express.static('./public'));
//listen  to port

//
todoController(app);
//listen to port
app.listen(3000);
console.log('You are listening...');