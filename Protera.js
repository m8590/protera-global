
document.addEventListener("DOMContentLoaded", function () {
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
        }
    });

    
    const heroBtn = document.querySelector(".hero .btn");
    if (heroBtn) {
        heroBtn.addEventListener("click", function () {
            alert("Redirecting to Products Page!");
        });
    }
});
