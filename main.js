document.addEventListener("DOMContentLoaded", function(){
    const todoForm = document.querySelector(".todoForm")
    const todoInput = document.querySelector(".todoText")
    const todoBtn = document.querySelector(".todoBtn")
    const todoList = document.querySelector(".todoList")
    let editMode = false
    let editItem = null


    todoForm.addEventListener("submit", function(e){
       e.preventDefault();

       const todoText = todoInput.value.trim()

       if(todoText !== ""){

        if(editMode){
            editItem.firstChild.textContent = todoText
            todoBtn.innerText = "Add"
            todoInput.value = ""
            editMode = false
            editItem = null
        }
        else{
            addtodoText(todoText)
        }
           
       }
    })


    todoList.addEventListener("click", function(event){
        const target = event.target
        alert(target.tagName)
        if(target.tagName === "BUTTON"){
            const todoItem = target.parentNode
              
            if(target.innerText === "Delete"){
                alert()
                todoItem.remove()
            }
            else if(target.innerText === "Edit"){
                editMode = true
                editItem = todoItem
                todoInput.value = todoItem.firstChild.textContent
                todoInput.focus()
                todoBtn.innerText = "Edit"
            }
        }
    })

    function addtodoText(todoText){
        const todoItem = document.createElement("li")
        const editBtn = document.createElement("button")
        const removeBtn = document.createElement("button")


        todoItem.innerHTML = `<span>${todoText}</span>`
        editBtn.innerText = "Edit"
        removeBtn.innerText = "Delete"
        todoItem.appendChild(editBtn)
        todoItem.appendChild(removeBtn)

        todoList.appendChild(todoItem)
        todoInput.value = ""
    }
})