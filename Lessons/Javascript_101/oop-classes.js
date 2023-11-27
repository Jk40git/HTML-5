import User from "./User.js";


document.addEventListener("DOMContentLoaded", () => {
    
    // another way to select any DOM Element
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fields = ['username', 'password']

        const userInput = new FormData(event.target);

        
    //         if (userInput.get(username.length) > 20) {
    //          const errorField = document.querySelector(`#username-error-message`);
    //          errorField.textContent = `Invalid username. Please follow the username requirements`; 
    //     }
    
        //      if (password.length < 8 || !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
        //     message.innerHTML = "Invalid password. Please follow the password requirements.";
        //     return;
        // }

        // message.innerHTML = "Login successful!";

        for (const field of fields) {
            if (userInput.get(field) === null || userInput.get(field) === "") {
                const errorField = document.querySelector(`#${field}-error-message`);
                errorField.textContent = `${field} is required`; 
                errorField.style.color = 'red';
                errorField.style.fontSize = '15px';
                document.querySelector(`[name=${field}]`).style.border = '1px solid red';
                break;
            }
            // else (userInput.get(username.length)> 20 || userInput.get(password.length)< 8) 
            //    const rrorField = document.querySelector(`#${username}-error-message`);
            //     rrorField.textContent= `${username} must be a max of 20 characters`;
            //     rrorField= document.querySelector(`#${password}-error-message`);
            //     rrorField.textContent= `${Password} should be a length of 8 characters min`;
            //     break
                    

            // Username length must be max 20 characters
            // Username must be alpha numeric
            // Password length min 8 characters
            // Password must contain at least 1 capital letter, 1 small letter, 1 number and 1 special character
        


        const user = new User();

        if (user.login(userInput.get('username'), userInput.get('password'))) {
            console.log(userInput);
        }
        }
    });



});