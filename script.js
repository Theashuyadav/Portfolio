document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded Successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form submission alert
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        document.querySelector("form").reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.querySelector(".typing");
    const words = ["a Full Stack Developer ", "a Data Analyst ", "a Tech Enthusiast "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        typedText.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 1000);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 50);
        }
    }

    typeEffect();
});
