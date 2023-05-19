let inputselcet=document.querySelector('.todo_input-box');
let todotasks=document.querySelector('.todo_tasks');
let todoText=document.querySelector('.todo-text');




function addNewTodo(newTodoValue){
    let newtodo=document.createElement('div');
    newtodo.className='todo-task';
    let newp=document.createElement('p');
    newp.className='todo-text';
    newp.innerText=newTodoValue;
    let newtrash=document.createElement('div');
    newtrash.className='trash';
  

    newi=document.createElement('i');
    newi.className='fa fa-trash-o';
    newtrash.append(newi);
    newtodo.append(newp,newtrash);
    todotasks.append(newtodo);
    newtrash.addEventListener('click',function(event){
        event.target.parentElement.parentElement.remove();
    })
}

inputselcet.addEventListener('keydown',function(event){
    let newtodoText= event.target.value.trim();
    // console.log(event.target.value.trim())
    if(event.key =='Enter'){
        if(inputselcet.value!=''){
            
            addNewTodo(newtodoText)
            event.target.value='';
        }
    } 
})