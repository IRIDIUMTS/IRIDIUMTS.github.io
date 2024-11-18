
function togglePassword() {
    const passwordInput = document.getElementById("exampleInputPassword1");
    const toggleCheckbox = document.getElementById("showPassword");
    passwordInput.type = toggleCheckbox.checked ? "text" : "password";
}

function validatePassword(event) {
    event.preventDefault(); 
    const passwordInput = document.getElementById("exampleInputPassword1");
    const password = passwordInput.value;

    // bien le control plus inspecter enculé
    if (password === "123") {
        window.location.href = "admin.html"; 
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "HEUUU TU ES QUI ?";
        errorMessage.classList.remove("d-none"); 
    }
}
