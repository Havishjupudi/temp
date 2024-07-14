const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    registerBtn.classList.add("clicked");
    setTimeout(() => {
        registerBtn.classList.remove("clicked");
    }, 300); // duration of the color change effect
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    loginBtn.classList.add("clicked");
    setTimeout(() => {
        loginBtn.classList.remove("clicked");
    }, 300); // duration of the color change effect
});
