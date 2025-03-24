function addTask(category) {
    //getting input
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    //validating task
    if (! taskText) return;

    //creating a new list item

    const li = document.createElement("li");
    li.textContent=taskText;

    //creating complete button
    const completeBtn= document.createElement("button");
    completeBtn.textContent = 'Mischief Managed!';
    completeBtn.onclick = () => li.style.textDecoration = 'line-through';
    // completeBtn.style.marginLeft = "300px";

    //creating delete button
    const deleteBtn= document.createElement("button");
    deleteBtn.textContent= 'Obliviate!';
    deleteBtn.onclick = () => li.remove();

    //appending buttons to the list items

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    //adding task to selected house
    document.getElementById(category).querySelector('ul').appendChild(li);

    //clearing the input field

    taskInput.value="";
   
}