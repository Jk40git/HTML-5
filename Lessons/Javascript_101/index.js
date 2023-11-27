// alert('Hello World')

function login(){
    const username = document.getElementById("username");
    const password = document.getElementById('password');
    console.log(
        username.value
    );

    console.log(
        password.value
    );

}


let loginForm= document.getElementById('loginForm');

loginForm.addEventListener('submit',function(e) {
    e.preventDefault();
    login();
})
