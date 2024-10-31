let inputBox=document.querySelector("#input-box")
let list =document.querySelector(".list")


function adTask(){
  if(inputBox.value===""){
    alert("You must write something!")
  }else{
    let li=document.createElement("li")
    li.innerHTML=inputBox.value;
    list.appendChild(li)
    inputBox.value=""
    let span=document.createElement("span")
    span.innerHTML="\u00d7";
    li.appendChild(span)
    saveData()
  }
}

list.addEventListener("click", (e)=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove()
  }
  saveData()
})

function saveData(){
  localStorage.setItem("data", list.innerHTML);
}
function showData(){
  list.innerHTML=localStorage.getItem("data")
}
showData()