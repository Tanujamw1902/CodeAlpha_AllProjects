function goHome() {
    window.location.href = "../../index.html";
}

let loginForm = document.getElementById("login-form");
let registerForm = document.getElementById("register-form");
let title = document.getElementById("form-title");

document.getElementById("show-register").onclick = () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    title.innerText = "Register";
};

document.getElementById("show-login").onclick = () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    title.innerText = "Login";
};

// Optional: simple JS alert demo for registration/login
loginForm.onsubmit = (e)=>{
    e.preventDefault();
    alert("Login clicked (C++ backend handles actual login)");
};
registerForm.onsubmit = (e)=>{
    e.preventDefault();
    alert("Register clicked (C++ backend handles actual registration)");
};
