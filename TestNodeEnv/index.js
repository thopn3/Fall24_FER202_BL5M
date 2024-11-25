// Khai báo 1 module 'http' -> Tạo 1 webserver
const http = require("http");

// Khai báo các thông số của webserver
const serverName = "localhost";
const portNumber = 3000;

// Khởi tạo 1 web server
const server = http.createServer((req, res) => {
    // Thiết lập các thông số của gói tin HttpResponse
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    // Trả về cho Client 1 content từ Web server
    res.end("Hello! FPT University");
});

// Kích hoạt Web server để lắng nghe các yêu cầu từ Client
server.listen(portNumber, serverName, ()=>{
    console.log("Web server running at: http://"+ serverName + ":" + portNumber);
});