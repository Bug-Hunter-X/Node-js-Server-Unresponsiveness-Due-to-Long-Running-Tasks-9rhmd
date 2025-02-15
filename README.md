# Node.js Server Unresponsiveness Due to Long-Running Tasks

This repository demonstrates a common issue in Node.js applications where a long-running task in a request handler can block the event loop, making the server unresponsive.  The solution shows how to address this by using asynchronous operations or breaking the long task into smaller chunks.