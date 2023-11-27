document.addEventListener("DOMContentLoaded", function () {
    const factContent = document.getElementById("fact");
    const btnLoadFact = document.getElementById("btnLoadFact");


    // Promise / resolve
   btnLoadFact.addEventListener("click", ()=>{
    fetch(
        'https://catfact.ninja/fact', // url
        {
            method: "Get", // request method
            headers: {
                'accept': 'application/json',
                'X-CSRF-TOKEN': 'HbY92a2aiPbC4i7vUs9K1CKjNY7LmK5llmlBFvUE'
            } // request header that help describe request to server
        })
        .then(res => {
            // will run if successful and create a promise
            console.log(res);
            return res.json();
        })
        .then(res => {
            // will run if successful and resolve the promise
            console.log(res);
            factContent.textContent = res.fact;
        })
        .catch(err => {
            // will run if unsuccessful/ error in request
            console.log(err);
        })
        .finally(() => {
            // will run if whether successful / error in request
            console.log("i will always run with or without error")
        })
   } );
    })