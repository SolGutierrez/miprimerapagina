function showAlert(){   
    alert("Esta es una alerta de javascript")
}

const form = document.getElementById("myForm")

function validateEmail (email) {    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {   
    const input = document.getElementById ("email")
    const inputValue = input.value 

    if (validateEmail(inputValue)) {    
        alert("Por favor ingrese un correo electronico valido")
    } else {    
        alert ("Correo electronico enviado correctamente")
    }
}
form.addEventListener("submit", function(lala)  {
    lala.preventDefault()
    validateForm();
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})






