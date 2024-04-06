const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("ps_note", notesContainer.innerHTML);
}

function deleteButtonEventListener(Event){
    Event.target.parentNode.remove();
    updateStorage();
}

createBtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img= document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    img.addEventListener('click', deleteButtonEventListener);
    inputBox.addEventListener('keydown', updateStorage);
    // inputBox.addEventListener('keydown', (Event)=>{
    //     if(Event.key==="Enter"){
    //         document.execCommand("insertLineBreak");
    //         event.preventDefault();
    //     }
    // })
    notesContainer.appendChild(inputBox).appendChild(img);
})

function loadNotes(){
    notesContainer.innerHTML=localStorage.getItem("ps_note");
}

loadNotes();