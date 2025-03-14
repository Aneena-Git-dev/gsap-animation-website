

function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon') && !event.target.matches('.close-btn')) {
        let dropdown = document.getElementById("dropdownMenu");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
}



document.addEventListener("DOMContentLoaded", function () {
    // GSAP Navbar Animation (Fade-in from the top)
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    // Home section animation (Fade-in)
    gsap.from(".home-text", {
        duration: 1,
        x: -100,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out"
    });

    // GSAP Scroll Animations
    gsap.utils.toArray(".food-box, .about-content, .menu-section, .aboutus-image").forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Navbar Smooth Scrolling
    document.querySelectorAll(".nav-link-scroll").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href");
            gsap.to(window, {
                duration: 1,
                scrollTo: targetId,
                ease: "power2.inOut"
            });
        });
    });
});
