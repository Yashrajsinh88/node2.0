// const express = require("express");
// const app = express();
// const PORT = 9000;

// // Home Path 
// app.get("/" , (req , res) => {
//     res.send("Welcome To Home Page")
// })

// // About Path
// app.get("/about" , (req , res) => {
//     res.send("Welcome To About Page");
// })

// app.listen(PORT, () => {
//   console.log(`Server Started at PORT : ${PORT}`);
// });


const express = require("express");
const app = express();
const PORT = 4000;

app.get("/" ,(req, res) => {
  res.send("welome to home page")
});

app.listen(PORT , () =>{
  console.log("server started");
});
 