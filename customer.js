var http =require("http");

var Customer=[
{Customerid:1,CustomerName:"jack",address:"mumbai"},
	{Customerid:2,CustomerName:"mark",address:"pune"},
		{Customerid:3,CustomerName:"lara",address:"Delhi"},
			{Customerid:4,CustomerName:"Anna",address:"mumbai"}
];

function process_request(req,resp)
{
	resp.writeHead(200,{"content_type":"text/plain"});
	resp.end(JSON.stringify(Customer));
}

var server=http.createServer(process_request);
server.listen(8000);
console.log("server is listining on port 8000");