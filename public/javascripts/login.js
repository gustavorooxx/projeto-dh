

function loginBtn(){

    var btnLogin = document.getElementById('btn-login')
    var btnRegister = document.getElementById('btn-register')
    var loginForm = document.getElementById('loginForm')
    var registerForm = document.getElementById('registerForm')

    btnLogin.style.backgroundColor = "white"
    btnLogin.style.color = "black"
    

    btnRegister.style.backgroundColor = "#003884"
    btnRegister.style.color = "white"

    registerForm.style.display = "none"
    loginForm.style.display = "flex"
}

function registerBtn(){

    var btnLogin = document.getElementById('btn-login')
    var btnRegister = document.getElementById('btn-register')
    var loginForm = document.getElementById('loginForm')
    var registerForm = document.getElementById('registerForm')

    btnRegister.style.backgroundColor = "white"
    // btnRegister.style.border = "none"
    btnRegister.style.color = "black"
    

    btnLogin.style.backgroundColor = "#003884"
    btnLogin.style.color = "white"

    loginForm.style.display = "none"
    registerForm.style.display = "flex"
    

    
}

