document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    
    nameElement.addEventListener('click', function() {
        alert('This is your name: ' + nameElement.innerText);
    });

    usernameElement.addEventListener('click', function() {
        alert('This is your username: ' + usernameElement.innerText);
    });

    emailElement.addEventListener('click', function() {
        alert('This is your email: ' + emailElement.innerText);
    });
});
