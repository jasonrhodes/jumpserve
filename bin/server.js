var fs = require("fs");
var host = "127.0.0.1";
var port = process.argv[2] || 8000;
var express = require("express");

var app = express();
app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function (request, response) {
    var index = './public/index.html';
    try { fs.readFileSync(index); }
    catch (e) {
        response.send("<h1>Jumpserve is running</h1><p>Create your own / file at" + index + "</p>");
        return;
    }
    response.sendfile(index);
});

app.get("/*", function(request, response){
    var file = './public' + request.url;

    try { fs.readFileSync(file); }
    catch (e) {
        file += "/index.html";
        try { fs.readFileSync(file); }
        catch (e) {
            response.statusCode = 404;
            response.send("(404) This file doesn't exist: " + file);
            return;
        }
    }

    response.sendfile(file);
});

console.log("Server running on localhost, port " + port);
console.log("Press ^C to shutdown");

app.listen(port, host);