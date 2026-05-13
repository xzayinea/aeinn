let inventory = [
    { id: 1, name: "Wireless Mouse", price: 100, stock: 10 },
    { id: 2, name: "Keyboard", price: 200, stock: 0 },
    { id: 3, name: "Galaxy Monitor", price: 5000, stock: 20 },
    { id: 4, name: "RTX 9090 1/1", price: 1000000, stock: 1 },
    { id: 5, name: "Gaming Speakers", price: 1200, stock: 123 }
]; 

function renderTable() {

    let tbody = document.getElementById("table-body");

    tbody.innerHTML = ""; 

    inventory.forEach(item => { 

        let stockDisplay =
            item.stock === 0 ? "Out of Stock" : item.stock;

        tbody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>Php ${item.price}</td> 
            <td style="color: ${item.stock === 0 ? 'red' : 'black'};">${stockDisplay}</td>
        </tr>
        `; 
    });
}

renderTable();

