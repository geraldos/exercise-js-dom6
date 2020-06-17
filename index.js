let list = []

let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {

    let inputs = document.getElementById('add-to-do').value;
    list.push(inputs);

    for (i = 0; i < list.length; i++) {
        var element = document.createElement("p");
        var value = document.createTextNode(list[i]);

        var buttons = document.createElement("BUTTON");
        var button1 = document.createElement("button");

        var edits = document.createTextNode("Edit");
        var deletee = document.createTextNode("Delete");
    }
    element.appendChild(value)
    buttons.appendChild(edits);
    button1.appendChild(deletee);
    document.getElementById("show").appendChild(element).appendChild(buttons).appendChild(button1)
})

console.log(list)