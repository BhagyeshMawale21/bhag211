var http =require("http");

var Employees=[
{empid:1,empName:"jack",address:"mumbai"},
	{empid:2,empName:"mark",address:"pune"},
		{empid:3,empName:"lara",address:"Delhi"},
			{empid:4,empName:"Anna",address:"mumbai"}
];

function process_request(req,resp)
{
	resp.writeHead(200,{"content_type":"text/plain"});
	resp.end(JSON.stringify(Employees));
}

var server=http.createServer(process_request);
server.listen(7000);
console.log("server is listining on port 7000");