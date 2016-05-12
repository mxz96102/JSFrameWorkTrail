/**
 * Created by 明多牧 on 2016/5/5.
 */
var http=require('http');

http.createServer(function (req,res) {
    res.writeHeader(200,{'Content-Type':'application/json', "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    });
    var data = {key: 'value', hello: 'world'};
    res.end(JSON.stringify(data))
}).listen(10086);