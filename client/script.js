async function deleteProduct(id){
    try {
        const response = await fetch(`http://localhost:3000/products/deleteProduct/${id}`,{
            method : "DELETE"
        })
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

const fetchProductsData =  async ()=>{
    try {
        const response = await fetch("http://localhost:3000/products/getAllProducts");
        const data  = await response.json();
        console.log(data.products);
        let tableBody = document.getElementById("product-table-body");
        data.products.forEach((item , index) => {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${item.productId}</td>
            <td>${item.productName}</td>
            <td>${item.productDescription}</td>
            <td>${item.productPrice}</td>
            <td>${item.category}</td>
            <td><button class='update-button'>Update</button><button class='delete-button' onclick='deleteProduct(${item.productId})'>Delete</button></td>
            `
            tableBody.appendChild(newRow);
        });
    } catch (error) {
        console.log(error);
    }
}

fetchProductsData();

document.getElementById("add-product-button").addEventListener("click",function(){
    document.getElementById("add-product-modal").style.display = "flex";
})

document.getElementById("close-modal-button").addEventListener("click",function(){
    document.getElementById("add-product-modal").style.display = "none";
})

const addProduct = async (productData)=>{
    try {
        const response = await fetch("http://localhost:3000/products/addProduct",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(productData)
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("add-product-from").addEventListener("submit",function(e){
    e.preventDefault();
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productDescription = document.getElementById("productDescription").value;
    let category = document.getElementById("category").value;
    addProduct({productName ,   productDescription , productPrice ,  category});
})