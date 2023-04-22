const http = require("http");

const app = require("./app/app");    

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
