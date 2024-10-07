let arr = [];
let add = document.getElementById("add");
let sub = document.getElementById("submit")
// add.addEventListener('click', clc = () =>
// {
// })

sub.addEventListener('click',submit = () =>
    {
        let input = document.getElementById("task").value;
        
        if (input != 0) {
            arr.push(input)
            console.log(arr)
        }
    let showTask = document.getElementById("showtask")
    
    arr.forEach(item =>
    {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item; // Set an ID based on the item name
        checkbox.name = 'items'; // All checkboxes can share the same name attribute
        
        // Create a label for the checkbox
        const label = document.createElement('label');
        label.htmlFor = item; // Associate label with the checkbox
        label.appendChild(document.createTextNode(item)); // Add the item text to the label
    
        // Append checkbox and label to the container
        showTask.appendChild(checkbox);
        showTask.appendChild(label);
        // Add a line break for better readability
        showTask.appendChild(document.createElement('br'));    
        arr.length=0
    }
)
})
