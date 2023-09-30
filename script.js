// Responsive Navbar
const menuIcon = document.getElementById("menuIcon");
const nav = document.getElementById("menu");
const navLinks = document.querySelectorAll(".menu a");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => { 
        nav.classList.remove("active");
        document.querySelector(".navbar").classList.add("collapsed");
    });
});

// Reviews Slide Show
let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}
function changeSlide(n) {
    showSlide(currentSlide += n);
}
showSlide(currentSlide);

// indicates in navbar on which section you are
const navbarHeight = document.querySelector(".navbar").offsetHeight;

function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });
            navLinks[index].classList.add("active");
        }
    });
}
updateActiveLink();
window.addEventListener("scroll", updateActiveLink);