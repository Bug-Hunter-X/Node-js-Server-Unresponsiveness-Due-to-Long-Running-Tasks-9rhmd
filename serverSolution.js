const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running task using async/await and process.nextTick to yield control
    for (let i = 0; i < 1000000000; i++) {
      if (i % 10000000 === 0) {
        await new Promise(resolve => process.nextTick(resolve)); //Yield control
      }
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});