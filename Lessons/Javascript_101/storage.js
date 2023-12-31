$(document).ready(function () {

    // convert string to array of objects
    const existingTodos = !localStorage.getItem('todos') ? [] :
        JSON.parse(localStorage.getItem('todos'));
    ;

    // loop through them and append each to ul 

    existingTodos.forEach(todo => {
        $("#todoBox").append(`<li>${todo.title}</li>`);
    });

    $("#todoForm").submit(function (e) {
        e.preventDefault();

        // capture form data
        const userInput = new FormData(this);

        // Add the todo in list of todos

        $("#todoBox").append(`<li>${userInput.get('todo')}</li>`);


        // get existing todos from local storage
        const oldTodos = localStorage.getItem('todos');

        // combine new todo with existing todos
        const newTodo = [{
            title: userInput.get('todo'),
            completed: false,
        }]

        let allTodos = [];

        if (!oldTodos) {
            allTodos = [
                ...newTodo
            ]
        } else {
            allTodos = [
                ...JSON.parse(oldTodos),
                ...newTodo
            ]
        }

        console.log(allTodos);
        console.log(JSON.stringify(allTodos));

        // convert array of objects to string
        // Store data in local storage
        localStorage.setItem('todos', JSON.stringify(allTodos));




    });

});




// $(document).ready(function(){

//     const existingTodos = localStorage.getItem('todos');
//     // convert string to array of objects
//      existingTodos.toString
//     // loop through them and append each to ul 
//     for (const existingTodos = 0;count < daysOfTheWeek.length; count++){
//         console.log( count +" "+ daysOfTheWeek[count]);
//     }
    
//     daysOfTheWeek.map((day) => console.log( count +" "+ daysOfTheWeek[count]))
//     $("#todoBox").append(`<li>${existingTodos}</li>`);


//     $("#todoForm").submit(function(e){
//         e.preventDefault();

//         // capture form data
//         const userInput = new FormData(this);

//         // Add the todo in list of todos

//         $("#todoBox").append(`<li>${userInput.get('todo')}</li>`);


//         // get existing todos from local storage
//         // combine new todo with existing todos
//         // convert array of objects to string
//         // Store data in local storage
//         localStorage.setItem('todos',userInput.get('todo'));




//     });

// });