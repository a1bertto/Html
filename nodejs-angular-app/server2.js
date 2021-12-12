const express = require("express");

//console.log(express);



// express() returns an object

const app = express();

console.log(app);



// setup the server-side routes

// set up URL + HTTP Methods (GET, POST, PUT)

// / means baseURL -> http://localhost:3000

app.get("/", (req, resp) => {

  console.log(req.headers);

  resp.send("<h1> Response on get request  </h1> ");

});



const port = 3000;

app.listen(port, () => {

  console.log(`development server created from express listening on ${port}`);

});
app.post("/api/posts", (req, res) => {

  res.status(201);

  res.send("Request from Post Http Method");

  // res.status().send();

});
