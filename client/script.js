const fetchProductsData =  async ()=>{
    try {
        const response = await fetch("http://localhost:3000/products/getAllProducts");
        const data  = await response.json();
        console.log(data.products);
        let tableBody = document.getElementById("product-table-body");
        data.products.forEach((item , index) => {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${index+1}</td>
            <td>${item.productName}</td>
            <td>${item.productDescription}</td>
            <td>${item.productPrice}</td>
            <td>${item.category}</td>
            <td><button class='update-button'>Update</button><button class='delete-button'>Delete</button></td>
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