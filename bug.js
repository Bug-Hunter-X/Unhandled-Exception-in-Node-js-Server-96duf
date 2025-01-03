const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an unhandled exception.  This can occur in various ways like a library throwing an error, or your code encountering a bug. 
//Throwing an error that is not caught shows how unhandled errors stop the program from running
throw new Error('Unhandled exception!');