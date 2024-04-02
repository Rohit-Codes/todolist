// document.addEventListener("DOMContentLoaded", function(){
//     const todoForm = document.querySelector(".todoForm")
//     const todoInput = document.querySelector(".todoText")
//     const todoBtn = document.querySelector(".todoBtn")
//     const todoList = document.querySelector(".todoList")
//     let editMode = false
//     let editItem = null


//     todoForm.addEventListener("submit", function(e){
//        e.preventDefault();

//        const todoText = todoInput.value.trim()

//        if(todoText !== ""){

//         if(editMode){
//             editItem.firstChild.textContent = todoText
//             todoBtn.innerText = "Add"
//             todoInput.value = ""
//             editMode = false
//             editItem = null
//         }
//         else{
//             addtodoText(todoText)
//         }
           
//        }
//     })


//     todoList.addEventListener("click", function(event){
//         const target = event.target
//         alert(target.tagName)
//         if(target.tagName === "BUTTON"){
//             const todoItem = target.parentNode
              
//             if(target.innerText === "Delete"){
//                 alert()
//                 todoItem.remove()
//             }
//             else if(target.innerText === "Edit"){
//                 editMode = true
//                 editItem = todoItem
//                 todoInput.value = todoItem.firstChild.textContent
//                 todoInput.focus()
//                 todoBtn.innerText = "Edit"
//             }
//         }
//     })

//     function addtodoText(todoText){
//         const todoItem = document.createElement("li")
//         const editBtn = document.createElement("button")
//         const removeBtn = document.createElement("button")


//         todoItem.innerHTML = `<span>${todoText}</span>`
//         editBtn.innerText = "Edit"
//         removeBtn.innerText = "Delete"
//         todoItem.appendChild(editBtn)
//         todoItem.appendChild(removeBtn)

//         todoList.appendChild(todoItem)
//         todoInput.value = ""
//     }
// })

const tabData = [
    {
    id: "tab1",
    title : "Tab-1",
    content : "This is content for tab -1"
},
{
    id: "tab2",
    title : "Tab-2",
    content : "This is content for tab -2"
},
{
    id: "tab3",
    title : "Tab-3",
    content : "This is content for tab -3"
},
]

document.addEventListener("DOMContentLoaded", function(){
    let activeTab = tabData[0].id

    function renderTab(){
        const tabContainer = document.querySelector("#tabContainer")
        const tabContentContainer = document.querySelector("#tabContentContainer")


        tabData.forEach((tab)=>{
            const tabButton = document.createElement("button")
            tabButton.className = "tab-links"
            tabButton.textContent = tab.title
            tabButton.setAttribute("data-tab", tab.id)
            tabContainer.appendChild(tabButton)

            const tabContent = document.createElement("div")
            tabContent.id = tab.id
            tabContent.className = "tab-content"
            tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`
            tabContentContainer.appendChild(tabContent)
        })

        tabContainer.addEventListener("click", function(event){

        if(event.target.matches(".tab-links")){
            const tabId = event.target.getAttribute("data-tab")
            if(tabId !== activeTab){
                openTab(tabId)
                activeTab = tabId
            }
        }
        })
    }

    function openTab(id){
        const tabContents = document.querySelectorAll(".tab-content")
        const tabLinks = document.querySelectorAll(".tab-links")

        tabContents.forEach((tab)=>{
            tab.classList.remove("active")
        })
        tabLinks.forEach((tab)=>{
            tab.classList.remove("active")
        })

        document.getElementById(id).classList.add("active")
        document.querySelector(`button[data-tab="${id}"]`).classList.add("active")
    }

renderTab()
document.getElementById(activeTab).classList.add("active")
document.querySelector(`button[data-tab="${activeTab}"]`).classList.add("active")
})