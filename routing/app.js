const http = require('http');
const fs = require('fs');

// GET request handler
const handleGetRequest = (req, res) => {
 if (req.url === '/users') {
   // Loads the database and searches for data
   makeDatabaseRequest('users', (err, payload) => {
      if (err) {
        res.writeHeader(400);
        res.write("Error retrieving data");
      } else {
        // Process successful request
        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(JSON.stringify(payload));
        console.log(payload)
      }
      res.end(); 
   });
 }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
// server.listen(5500, 'localhost',  () => {
//   console.log(`Server is listening on:  ${server.address()}`);
// });
server.listen(5500, () =>{
  console.log(`Server is listening...`);
})

function makeDatabaseRequest(type, cb) {
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
    } else {
      cb(null, JSON.parse(payload)[type]);
    }
  });
}