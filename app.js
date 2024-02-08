// let list=document.querySelector("list")


// function getvalue(){
//     let input=document.getElementById("enter-task");
//     let value=input.value;
//     if(input.value==""){
//         alert("enter a task");
//     };
//     let li = document.createElement('li');
//     li.textContent = input.value;
    
//     let delete=document.createElement('button');
//     delete.textContent="Delete";
//     delete.onclick=function(){
//         list.removeChild(li);
//     };
//     li.appendChild(delete);
//     list.appendChild(li);
//     input.value="";

    

// };



function addtask() {
    let input = document.getElementById('enter-task');
    let list = document.getElementById('list');

    if (input.value.trim() === '') {
        alert('enter a task');
        return;
    }

    let li = document.createElement('li');
    li.textContent = input.value;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        list.removeChild(li);
    };

    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = '';
}

