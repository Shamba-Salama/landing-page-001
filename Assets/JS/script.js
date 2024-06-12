// JavaScript to handle the burger menu toggle for responsiveness

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
});







// script.js
document.addEventListener('DOMContentLoaded', () => {
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const formSections = document.querySelectorAll('.form-section');
    const bullets = document.querySelectorAll('.bullet');

    let currentSection = 0;

    function showSection(index) {
        formSections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
            bullets[i].classList.toggle('active', i <= index);
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentSection < formSections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentSection > 0) {
                currentSection--;
                showSection(currentSection);
            }
        });
    });

    // Initialize the form by showing the first section
    showSection(currentSection);
});
