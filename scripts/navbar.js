
const navMenu = document.getElementsByClassName("nav-menu")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
var prevScrollpos = window.pageYOffset;
var togg = 0;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    togg = 1;
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    togg = 0;
}));

window.onscroll = function() {
    if (togg == 1){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        } else {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
        prevScrollpos = currentScrollPos;
    }
}