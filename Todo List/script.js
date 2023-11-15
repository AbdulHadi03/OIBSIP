let addButton = document.querySelector(".add");
let ul = document.querySelector(".tasks");
let textArea = document.querySelector("#add-todo");
let compl_ul=document.querySelector(".comp_ul")
let count=0
addButton.addEventListener('click', () => {
    let content = textArea.value;

    // Create new list item
    let listItem = document.createElement('li');
    listItem.classList.add('list');
    
    // Create textarea for the task
    let taskText = document.createElement('textarea');
    taskText.classList.add('task');
    taskText.cols = "100";
    taskText.rows = "3";
    taskText.wrap = "off";
    taskText.readOnly = true;
    taskText.value = content;
    
    // const pending_task=document.querySelector('.task')

    let edit = document.createElement('button');
    edit.classList.add('add_todo','edt');
    edit.textContent = 'Edit';
    
    let del = document.createElement('button');
    del.classList.add('add_todo', 'red');
    del.textContent = 'X';
    
    let doneButton = document.createElement('button');
    doneButton.classList.add('add_todo','dne');
    doneButton.textContent = 'Done';

    // Append elements to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(edit);
    listItem.appendChild(del);
    listItem.appendChild(doneButton);

    // Append the list item to the ul
    ul.appendChild(listItem);

    // Clear the text area
    textArea.value = "";

    // Add event listener for delete button
    del.addEventListener('click', () => {
        listItem.remove();
        // if(compl_ul.innerHTML="") head
    });

    edit.addEventListener('click',(e)=>{
         taskText.readOnly=false;
         edit.innerText='Save'
         edit.addEventListener('click',()=>{
            taskText.readOnly=true;
         edit.innerText='Edit'
         })
    })
    
    doneButton.addEventListener('click',()=>{
       
       let heading2=document.querySelector('.invisible')

       heading2.style.visibility ="visible";
    //    document.getElementsByClassName(".invisible").style.visibility = "visible
        let done=document.querySelector('.dne')
        listItem.removeChild(done)
        compl_ul.appendChild(listItem);
        
        })
        // console.log(compl_ul.innerHTML)
});
