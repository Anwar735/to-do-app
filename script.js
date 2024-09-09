const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list container");
function addTask() {
    if (inputBox.value === '') {
        alert("you must write somwthing!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
          span.innerHTML = "\u00d7";
           li.appendChild(span);

           inputBox.value = '';
    }
       
        let editButton = document.createElement('button');
                editButton.innerText = 'Edit';
                editButton.onclick = () => editTask(index);
                li.appendChild(editButton);

                inputBox.value = '';

}

  

   listContainer.addEventListener("click", function (e){
       if (e.target.tagName === "LI") {
        e.target.ClassList.toggle("checked");
        // saveData();
    }
      
         else if (e.target.tagName === "SPAN") {

                 e.target.parentElement.remove();
        //   saveData();
    }
    

},false);

     function editTask(index) {
        const newTaskText = prompt("Edit the task:", tasks[index]);
       if (newTaskText !== null && newTaskText.trim() !== "") {
            tasks[index] = newTaskText; // Update the task
              renderTasks();


    
//     localStorage.setItem("data" , listContainer.innerHTML);

// function showTask() {
//    listContainer.innerHTML = localStorage.getItem("data");
// }
//     showTask();
  

    }
}
