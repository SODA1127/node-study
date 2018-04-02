const cal = require('./cal');
const http = require('http');

const url = require('url');

http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let pathname = parseUrl.pathname;
    let query = parseUrl.query;
    let num1 = query.num1;
    let num2 = query.num2;
    if(isNaN(num1) || isNaN(num2)){
        res.writeHead(500, {'content-type':'text/html;charset=utf-8'});
        res.write('잘못된 값을 입력했습니다');
        res.end();
        return;
    }
    let result = '<h1>' + cal(num1, num2, pathname) + '</h1>';
    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.write(result);
    res.end();
}).listen(3000);


