function login(){
    const url = 'https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/user/login';
    var user =document.getElementById("loginName").value;
    var pass =document.getElementById("loginPassword").value;
    console.log(user);
    console.log(pass)
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "NickName": user, // Suponiendo que 'user' es una variable que contiene el nombre de usuario
            "Password": pass     // Suponiendo que 'pass' es una variable que contiene la contraseña
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
        alert("Login");
    
    //    document.getElementById('formDiagramUser').reset();
    
    window.location.href = 'index.html';
    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Intenta nuevamente");
       
    });
}

function Register(){
    const url = 'https://api-di-01-c9fzh0hsdbbphhbv.mexicocentral-01.azurewebsites.net/api/user/create';
    var user =document.getElementById("nickname").value;
    var userName =document.getElementById("username").value;
    var lastName =document.getElementById("lastname").value;
    var email =document.getElementById("email").value;
    var pass =document.getElementById("confirmPassword").value;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "RolId" : 1,
            "NickName":user,
            "UserName":userName,
            "LastName":lastName,
            "Email":email,
            "Password": pass
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
        alert("Login inicia sesión");
    
    //    document.getElementById('formDiagramUser').reset();
    
    //window.location.href = 'main.html';
    })
    .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error('Error en la petición:', error);
        alert("Error! Prueba con una contraseña más segura");
       
    });
}