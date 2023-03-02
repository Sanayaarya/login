const inputName=document.getElementById("username")
const inputEmail=document.getElementById("email")
const inputMobile=document.getElementById("mobile")


let name=""
let email=""
let mobile=""
function change(){
  name=document.getElementById("username").value
  console.log(name)
  email=document.getElementById("email").value
  mobile=document.getElementById("mobile").value
}


function login(){
  alert(name)
  alert(email)
  alert(mobile)
}
inputName.addEventListener("change",change)
inputEmail.addEventListener("change",change)
inputMobile.addEventListener("change",change)
