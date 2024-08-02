function createC(){
    const url = 'https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/comment/create';
    var comm = document.getElementById("message").value;
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "UserId":1,
            "BusinessId":1,
            "Comment":comm
        }),
        headers: {
            'Accept': 'application/json', // Configura los headers si es necesario
            'Content-Type': 'application/json' 
        }
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
        //alert("Login inicia sesión");
    
    //    document.getElementById('formDiagramUser').reset();
    
    //window.location.href = 'main.html';
    window.location.reload();
    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error el SERVIDOR");
       
    });
}

function getAllC(){
    const url = 'https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/comment/getByBusiness/1';
    var comm = document.getElementById("message").value;
    fetch(url, {
        method: 'POST'
        // body: JSON.stringify({
        //     "UserId":1,
        //     "BusinessId":1,
        //     "Comment":comm
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
        //alert("Login inicia sesión");
    
    //    document.getElementById('formDiagramUser').reset();
    
    //window.location.href = 'main.html';
    // Obtener el cuerpo de la tabla
    var tbody = document.querySelector('#miTabla tbody');

    // Construir las filas de la tabla
    for (var i = 0; i < data.data.length; i++) {
        var fila = "<tr>";
        fila += "<td>" + data.data[i].comment + "</td>";
        fila += "<td>" + data.data[i].userName + "</td>";
        fila += "</tr>";

        // Agregar la fila al cuerpo de la tabla
        tbody.innerHTML += fila;
    }
    

    
    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error el SERVIDOR");
       
    });
}

getAllC();