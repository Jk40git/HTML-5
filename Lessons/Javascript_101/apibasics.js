// "use strict";

document.addEventListener("DOMContentLoaded", function () {

    // console.log("Hello");

    // Promise / resolve

    // fetch(
    //     'https://catfact.ninja/fact', {
    //         method: "Get",
    //         headers: {
    //         'accept': 'application/json', 
    //         'X-CSRF-TOKEN': 'gdubo2Z0cds3K5GJYXq0XnaZQeDgrOKnQnILH3Qs'
    //         }    
    //     }).then(res => {
    //         console.log(res);
    //         return res.json();
    //     }).then (res => {
    //         console.log(res)
        
    //     })
    //     . catch(err=> {
    //         console.error(err);
    //     })
    //     .finally(()=> {
    //         console.log('I will always run with or without error')
    //     })
        // await/ Async
        // "use strict";

// document.addEventListener("DOMContentLoaded", function () {

    // const factContent = document.getElementById("fact");
    // const btnLoadFact = document.getElementById("btnLoadFact");
    
//         const results = async () => {
//             try {
//              const res = await fetch('https://catfact.ninja/fact', {
//                  method: "GET",
//                  headers: {
//                      'accept': 'application/json',
//                      'X-CSRF-TOKEN': 'HbY92a2aiPbC4i7vUs9K1CKjNY7LmK5llmlBFvUE'
//                  }
//              });
     
//              const finalRes =  await res.json(); //javascript object notation
//              factContent.textContent = finalRes.fact;

//             } catch (error) {
//              console.log(error);
//             }finally{

//             }
//          }


//         //  callback
//          btnLoadFact.addEventListener("click", results);

     

// });
// const factContent = document.getElementById("fact");
const btnLoadFact = document.getElementById("btnLoadFact");

btnLoadFact.addEventListener("click",

fetch(
    
    'https://catfact.ninja/fact', {
        method: "GET",
        headers: {
        'accept': 'application/json', 
        'X-CSRF-TOKEN': 'gdubo2Z0cds3K5GJYXq0XnaZQeDgrOKnQnILH3Qs'
        }    
    }).then(res => {
        console.log(res);
        return res.json();
    }).then (res => {
        console.log(res)
    
    })
    . catch(err=> {
        console.error(err);
    })
    .finally(()=> {
        console.log('I will always run with or without error')
    }) );
});
