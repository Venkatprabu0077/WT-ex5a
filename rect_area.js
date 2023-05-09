const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.t1);
    var a = Number(q.t1);
    var b = Number(q.t2);
    var area = a*b;
    res.write("Area of the rectangle is "+area);
    res.end();
    
}).listen(8080);