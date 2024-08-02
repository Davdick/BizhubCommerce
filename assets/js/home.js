const tableBody = document.getElementById("tblData");
 
function getData(){
    var id = document.getElementById("buscador").value;
    id = parseInt(id);
    const url = "http://localhost:5154/api/product/getProductByBusiness/"+id;
    fetch(url, {
        method: 'GET'
        // body: JSON.stringify({
        //     "NombreUsuario": user, // Suponiendo que 'user' es una variable que contiene el nombre de usuario
        //     "Contrasena": pass     // Suponiendo que 'pass' es una variable que contiene la contraseña
        // }),
        // headers: {
        //     'Accept': 'application/json', // Configura los headers si es necesario
        //     'Content-Type': 'application/json' 
        // }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Manejar la respuesta del servidor
        console.log('Respuesta del servidor:', data);
        alert("PRODUCTO ENCONTRADO");
    
    //    document.getElementById('formDiagramUser').reset();
    
    //window.location.href = 'main.html';
    document.getElementById("businessId").value = data.data.businessId;
    document.getElementById("serviceProductName").value = data.data.serviceProductName;
    document.getElementById("description").value = data.data.description;
    var del = document.getElementById("delDS");
    del.getAttribute("dataid") = data.data.idProduct;
    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
}
