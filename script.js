const todoitem = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
function addTodo() {
  if (todoitem.value === '') {
    alert("you must write somwthing!");
  }
 else {
    let li = document.createElement("li");
    li.innerHTML = todoitem.value;
    listContainer.appendChild(li);

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "btn");
    // passed this as deleteItem () argument:
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);


    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)");



    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
        
    
  }
    
       todoitem.value = '';
  

}
    
    function deleteItem(e) {
       e.parentNode.remove();
}
     function editItem(e) {
      var val = e.parentNode.firstChild.nodeValue;
         var editValue = prompt("Enter edit value", val);

          e.parentNode.firstChild.nodeValue = editValue;
}







