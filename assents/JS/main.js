// ==== MENU SHOW ==== 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}
showMenu("nav-toggle","nav-menu")

// ==== ACTIVE AND REMOVE MENU ====
const navLink = document.querySelectorAll(".nav__link")

function linkAction (){
    // Active link
    navLink.forEach(n=>n.classList.remove("active"))
    this.classList.add("active")

    // Remove Menu mobile
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


// ==== SCROLL REVEAL ANIMATION ====
const sr= ScrollReveal ({
    origin:'bottom',
    distance:'80px',
    duration: 2000,
})

// ==== SCROLL HOME ====
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// ALERT

function sent(){
    alert ("Message sent")
}
