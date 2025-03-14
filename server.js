const express = require("express");
const productRoutes = require("./router/productRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products",productRoutes);  


app.listen(3000,()=>{  //   
    console.log("Server is running on port 3000");
});