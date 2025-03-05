// list all the products - get
// list one single product - get
// add one product - post
// update one product - put
// delete one product - delete

const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

console.log(productController);

// /getAllProducts


router.get("/getAllProducts",productController.getAllProducts);

router.get("/getOneProduct/:id",productController.getOneProduct);

router.post("/addProduct",productController.addProduct);

router.put("/updateProduct/:id",productController.updateProduct);

router.delete("/deleteProduct/:id",productController.deleteProduct);


module.exports = router;