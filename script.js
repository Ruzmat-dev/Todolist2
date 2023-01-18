const form = document.querySelector("#form"),
    input = document.querySelector('#form-input'),
    ul = document.querySelector("#form-ul"),
    delet = document.querySelector("#delete"),
    icon = document.querySelector("#icon"),
    modal = document.querySelector("#wrapper"),
    yes = document.querySelector("#yes"),
    no = document.querySelector("#no");
form.addEventListener("submit", addTodo)
function addTodo(e) {
    e.preventDefault()
    const inputValue = input.value
    if (inputValue.trim().length >= 3) {
        let timer = new Date;
        const newTimer = `${timer.getHours().toString().padStart(2, "0")} : ${timer.getMinutes().toString().padStart(2, "0")} : ${timer.getSeconds().toString().padStart(2, "0")}`
        const listLi = document.createElement("li"),
            listText = document.createElement("p"),
            divWrapper = document.createElement("div");
        divWrapper.innerHTML = `  
            <button class="bi bi-check-circle-fill fillop btn-complete" id="btn-complete">Complete</button>
            <button class="bi bi-pencil-square fillop btn-edit" id="btn-edit">Edit</button>
            <button class="bi bi-clock btn-time" id="btn-time">${newTimer}</button>
            <button class="bi bi-trash3 btn-delete" id="btn-delete">Delate</button>

        `
        listLi.className = "item";
        divWrapper.className = "box"
        listLi.appendChild(listText);
        ul.appendChild(listLi)
        listLi.appendChild(divWrapper);
        input.value = ''

        listText.innerHTML = inputValue

    } else { todolistHeading.style.display = "block" }
}

delet.addEventListener('click', () => {
    if (ul.firstChild) {
        if (modal.style.cssText = `transform: translateY(-800px);`) {
            modal.style.cssText = `transform: translateY(0px) ;transition: 1s; background-color: rgba(0, 0, 0, 0.7)`
        }
    }
})

ul.addEventListener("click", (e) => {
    console.log(1);
    if (e.target.classList.contains("btn-delete")) {
        const isAgreedToDelete = confirm("Are you sure to delete this item?");
        if (isAgreedToDelete) {
            e.target.parentElement.parentElement.remove();
        }
    }
    else if (e.target.classList.contains("btn-edit")) {
        if (e.target.parentElement.previousSibling.hasAttribute("contenteditable")) {
            e.target.parentElement.previousSibling.removeAttribute("contenteditable");
            e.target.innerHTML = '<i class="fas fa-edit"></i>  Edit';
            e.target.style.background = "gold";
        }
        else {
            e.target.parentElement.previousSibling.setAttribute("contenteditable", true)
            e.target.innerHTML = '<i class="fas fa-check-double"></i>Done';
            e.target.style.background = "purple";
            e.target.classList.remove("bi-pencil-square")
        }
    }
    else if (e.target.classList.contains("btn-complete")) {
        e.target.parentElement.previousSibling.classList.toggle("btnComplate")
    }
    else if (e.target.classList.contains("btn-time")){
       let newTimerPmAm = new Date ; 
        if(newTimerPmAm.getHours() > 12) {
          console.log(e.target);
          e.target.innerHTML = `${newTimerPmAm.getHours()-12}:${newTimerPmAm.getMinutes()}:${newTimerPmAm.getSeconds()} PM`
        }
        
    }
}
)
yes.addEventListener('click', () => {
    ul.innerHTML = " "
    modal.style.cssText = ` display: none`
})

no.addEventListener("click", () => {
    modal.style.cssText = ` display: none`
})

icon.addEventListener("click", () => {
    input.value = ''
})

