const fs = require("fs");
const path = require("path");
const handler = require("./handler");

const router = (request, response) => {
  const url = request.url;
  console.log("I'm inside router");
  if (url === '/') {
    var filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type' : 'text/hmtl' })
      response.end('<h1> Sorry, there is Error</h1>');
    } else {
      response.writeHead(200, { 'Content-Type' : 'text/html' });
      response.end(file);
    }
})
};

const router = (request, response) => {
  const url = request.url;
  if (url === "/") {
    handlers.handleHome(request, response, url);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 not found</h1>");
  }
};

module.exports = router;
}
