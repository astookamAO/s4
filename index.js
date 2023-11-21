const http = require("http");

const hostname = "0.0.0.0";
const port = 4000;

const arg = (req, response) => {

  let greeting = "";
  let arrayOfName = ["abab", "moh", "astou", "ousmane"]

    if (arrayOfName.includes(req.url.replace(/\//,''))){
        greeting = "Hello World";
        response.statusCode = 200;
     } else {
        greeting = "Not found";
        response.statusCode = 404;
  }

  response.setHeader("Content-Type", "text/plain");
  response.end(`${greeting} ${req.url.replace(/\//,'')}`);
};

const server = http.createServer(arg);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
