let list = [];

let formTodo = document.getElementById("form-todo");
let submitButton = document.getElementById("submit");
let listAllTodo = document.getElementById("show");

// submitButton.addEventListener("click", function () {
//     let inputs = document.getElementById("add-to-do").value;
//     list.push(inputs);

//     for (i = 0; i < list.length; i++) {
//         var element = document.createElement("p");
//         var value = document.createTextNode(list[i]);

//         var buttons = document.createElement("BUTTON");
//         var button1 = document.createElement("BUTTON");

//         var edits = document.createTextNode("Edit");
//         var deletee = document.createTextNode("Delete");
//     }
//     element.appendChild(value);

//     buttons.appendChild(edits);
//     button1.appendChild(deletee);

//     element.appendChild(buttons);
//     element.appendChild(button1);

//     document.getElementById("show").appendChild(element);
// });

// console.log(list);

let addToDo = (event) => {
    event.preventDefault();

    let addValue = document.getElementById("add-to-do").value;
    list.push(addValue);
    displayTodo(list);
};

let displayTodo = () => {
    listAllTodo.innerHTML = "";

    list.forEach((element, index) => {
        let result = document.createElement("li");
        result.innerHTML = `${element}
            <div><button id="edit-${index}">Edit</button>
            <button id="delete-${index}">Delete</button></div>`;

        listAllTodo.appendChild(result);

    });
};

let editTodo = (index) => {
    let newTodo = prompt("Enter your new todo...");
    list.splice(index, 1);

    displayTodo(list);
};

// let deleteTodo = (index) => {
//     list.splice(index, 1);
//     displayTodo(list);
// };

formTodo.addEventListener("submit", addToDo);
submitButton.addEventListener("click", addToDo);
listAllTodo.addEventListener("click", editTodo);
// listAllTodo.addEventListener("click", deleteTodo);