const http = require('http');
const url = require('url');

let randNum = 0;

http.createServer((req, res) => {
    res.write("<h1>숫자 맞추기 게임</h1>");
    res.write("<h4>0 ~ 100 까지 범위로 정해졌습니다.</h4>");

}).listen(3000);