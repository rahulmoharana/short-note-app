const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".button");
const header = document.querySelector(".head");
var head = "Sticky Notes"
const value = head.split("")
value.forEach((data) => {
    let spanElement = document.createElement('div');
    spanElement.textContent = data;
    spanElement.classList.add("spanel")
    
    header.appendChild(spanElement);
  

})
console.log(value)

let notes ;

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

btn.addEventListener("click",()=>{
   
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable","true");
    img.classList.add("red")
    img.src="https://imgs.search.brave.com/A8yvL5i5o8kRW8qeseBGyG_BH8MlyiHOzOw-McOEP0c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvUmVk/LUNpcmNsZS5wbmc";
    notesContainer.appendChild(inputBox,img).appendChild(img)
    
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })

    }

})
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.from(".heading",{
        color:"black",
        scale:5,
        duration:1,
        ease:"expo.in",
        
    });
    const tl = gsap.timeline()
    tl.from(".spanel",{
        y:200,
        duration:2,
        ease:"bounce.in",
        stagger:.030

    })
    tl.from(".logo",{
        rotation:90,
        duration:1,
        scale:.5,
        opacity:0
    })
    gsap.from(".button",{
        y:-100,
        opacity:0

    })
   });

  
