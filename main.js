var loader = document.getElementById("loader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});







const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})

window.addEventListener ("load", () => {
    const loader = document.querySelector (".loader");

    loader.classList.add ("loader-hidden");

    loader.addEventListener ("transitionend", () => { document.body.removeChild("loader");
  })
    })


    let btn = document.getElementById("btn");
    let btnText = document.getElementById("btnText");
    let btnIcon = document.getElementById("btnIcon");
    let logo = document.getElementById("logo");


    btn.onclick = function(){
      document.body.classList.toggle("dark-theme");

      if(document.body.classList.contains("dark-theme")){
         btnIcon.src = "/pics/lightmood.png";
         btnText.innerHTML = "light";
        logo.src = "/pics/lightmood.png";
      }else{
        btnIcon.src = "/pics/darkmood.png";
        btnText.innerHTML = "Dark";
      }
    }
