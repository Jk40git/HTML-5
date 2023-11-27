<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .container {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <button type="submit">Submit</button>
        </form>
        <p id="message"></p>
    </div>

    <script>
        const loginForm = document.getElementById("loginForm");
        const message = document.getElementById("message");

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            message.innerHTML = "";

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Validate the username
            if (username.length > 20 || !/^[a-zA-Z0-9]+$/.test(username)) {
                message.innerHTML = "Invalid username. Please follow the username requirements.";
                return;
            }

            // Validate the password
            if (password.length < 8 || !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
                message.innerHTML = "Invalid password. Please follow the password requirements.";
                return;
            }

            // If both username and password are valid, you can proceed with authentication.
            // You can add your authentication logic here.
            message.innerHTML = "Login successful!";
        });
    </script>
</body>
</html>
