const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-toggled");
    mobileMenu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll")
});