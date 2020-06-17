let inputList = document.querySelector(".output-todo");
let list = [];
let buttonInput = document.getElementById("button-input");

buttonInput.addEventListener("click", () => {
    const inputTodo = document.getElementById("input-todo").value;
    list.push(inputTodo);
    resultInput();
});

resultInput = () => {
    inputList.innerHTML = null;

    list.forEach((item, index) => {

        let inputValue = document.createTextNode(item);
        let text = document.createElement("p");
        text.appendChild(inputValue);
        let divTodo = document.createElement("div");
        divTodo.setAttribute("class", "todo");
        divTodo.appendChild(text);


        let divButton = document.createElement("div");
        divButton.setAttribute("class", "button");
        let editButton = document.createElement("button");
        let textEdit = document.createTextNode("Edit");
        editButton.appendChild(textEdit);
        let deleteButton = document.createElement("button");
        let textDelete = document.createTextNode("Delete");
        deleteButton.appendChild(textDelete);
        divButton.appendChild(editButton);
        divButton.appendChild(deleteButton);

        let divList = document.createElement("div");
        divList.setAttribute("class", "list");
        divList.appendChild(divTodo);
        divList.appendChild(divButton);
        inputList.appendChild(divList);

        editButton.addEventListener("click", () => {
            editItem(index);
        });

        deleteButton.addEventListener("click", () => {
            deleteItem(index);
        });
    });
};

editItem = (index) => {
    newItem = prompt("Edit your todo list..");
    list.splice(index, 1, newItem);

    resultInput();
};

deleteItem = (index) => {
    list.splice(index, 1);

    resultInput();
};