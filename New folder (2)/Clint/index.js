const mgscontainer = document.getElementsByClassName("message_container")
const form = document.querySelector(".form");
const message = document.querySelector(".message")
const room  = document.querySelector('.room')
const mgsbtn = document.querySelector(".mgsbtn")
const roombtn = document.querySelector(".roombtn")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
const mgs = message.value;
console.log(mgs)

})


