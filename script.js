// Welcome message
window.onload = function () {
    alert("Welcome to My Portfolio Website");
};

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}


// Current Year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
}

// Scroll to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Contact Message
function contactMe() {
    alert("Thank you for visiting my portfolio!");
}

window.addEventListener("scroll", function () {

    const miniPic = document.getElementById("miniPic");

    if (window.scrollY > 150) {
        miniPic.classList.add("show");
    } else {
        miniPic.classList.remove("show");
    }

});