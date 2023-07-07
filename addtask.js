function addtask() {
    if (inputbox.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendchild(li);
    }
    
}

