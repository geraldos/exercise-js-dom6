let list = []

let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {

    let inputs = document.getElementById('add-to-do').value;
    list.push(inputs);

    for (i = 0; i < list.length; i++) {
        var element = document.createElement("p");
        var value = document.createTextNode(list[i]);

        var buttons = document.createElement("BUTTON");
        var button1 = document.createElement("BUTTON");

        var edits = document.createTextNode("Edit");
        var deletee = document.createTextNode("Delete");
    }
    element.appendChild(value);

    buttons.appendChild(edits);
    button1.appendChild(deletee);

    element.appendChild(buttons);
    element.appendChild(button1);

    document.getElementById("show").appendChild(element)

})

console.log(list)