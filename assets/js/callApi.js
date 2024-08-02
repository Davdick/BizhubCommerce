//var datos = [];
function getDataAlitas(){
    //var id = document.getElementById("buscador").value;
    //id = parseInt(id);
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Alitas";
    fetch(url, {
        method: 'POST'
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
        //alert("PRODUCTO ENCONTRADO");
    
    //    document.getElementById('formDiagramUser').reset();
    
    //window.location.href = 'main.html';
    // document.getElementById("businessId").value = data.data.businessId;
    // document.getElementById("serviceProductName").value = data.data.serviceProductName;
    // document.getElementById("description").value = data.data.description;
    // var del = document.getElementById("delDS");
    // del.getAttribute("dataid") = data.data.idProduct;
    //datos.push(data);
    let elm = document.getElementById("prod1");
    let elm2 = document.getElementById("desc1");
    elm.textContent= data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

function getDataCamisa(){
    
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Camisa";
    fetch(url, {
        method: 'POST'
        
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
        
    let elm = document.getElementById("prod4");
    let elm2 = document.getElementById("desc4");
    elm.textContent= data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

function getDataConjunto(){
    
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Conjunto";
    fetch(url, {
        method: 'POST'
        
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
        
    let elm = document.getElementById("prod3");
    let elm2 = document.getElementById("desc3");
    elm.textContent= data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

function getDataMec(){
    
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Mecanica";
    fetch(url, {
        method: 'POST'
        
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
        
    let elm = document.getElementById("prod5");
    let elm2 = document.getElementById("desc5");
    elm.textContent= data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

function getDataConst(){
    
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Construniga";
    fetch(url, {
        method: 'POST'
        
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
        
    let elm = document.getElementById("prod6");
    let elm2 = document.getElementById("desc6");
    elm.textContent = data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

function getDataHamb(){
    
    
    const url = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Hamburguesa";
    fetch(url, {
        method: 'POST'
        
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
        
    let elm = document.getElementById("prod2");
    let elm2 = document.getElementById("desc2");
    elm.textContent = data.data.serviceProductName;
    elm2.textContent= data.data.description;
        

    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
   
}

//const prote = "https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/Product/getProductByName/Proteina";

getDataAlitas();
getDataCamisa();
getDataConjunto();
getDataConst();
getDataMec();
getDataHamb();
