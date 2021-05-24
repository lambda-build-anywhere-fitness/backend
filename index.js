const server = require('./api/server');
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Running server on port:${port}  (Full URL with port # on MS Windows: http://localhost:${port}/)`));