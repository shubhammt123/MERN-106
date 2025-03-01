const fs = require("fs");
const { json } = require("stream/consumers");
function readData(){
    let data = fs.readFileSync("product.json" , "utf-8");
    let newData = JSON.parse(data);
    return newData;
}

function writeData(data){
    let convertedData = JSON.stringify(data,null,2);
    fs.writeFileSync("product.json", convertedData);
}

function getAllProducts (req,res){
    let data = readData();
    res.send({messsage : "Data Fetched" , products : data});
}

 function getOneProduct(req,res){
    let existingData = readData();
    let singleProduct = existingData.find((item)=>{
       return item.productId === +req.params.id;
    });
    console.log(singleProduct)
    res.send({message : `Product Fetched With id ${req.params.id}` , product : singleProduct});
}

 function addProduct(req,res){
    let existingData = readData();
    // req.body.productId = existingData.length+1;
    let updatedData = {...req.body , productId : existingData.length+1};
    existingData.push(updatedData);
    writeData(existingData);
    res.send({message : "Product Added" , product : updatedData});
}

 function updateProduct(req,res){
    console.log(req.params.id)
    console.log(req.body)
    let productData = readData();
    let indexOfUpdateProduct = productData.findIndex((item)=>{
        return item.productId === +req.params.id
    })
    if(indexOfUpdateProduct === -1){
        return res.end("Product Not Found");
    }
    let productToBeUpdat = productData[indexOfUpdateProduct];
    let updatedProduct = {...productToBeUpdat , ...req.body};
    productData[indexOfUpdateProduct] = updatedProduct;
    writeData(productData);
    res.end("Product Updated");
}

 function deleteProduct(req,res){
    res.send("Delete Product Api");
}

module.exports = {getAllProducts , getOneProduct , addProduct , updateProduct , deleteProduct}
