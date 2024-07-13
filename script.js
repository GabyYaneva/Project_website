document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile_menu');
    const navbarMenu = document.querySelector('.navbar_menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is_active');
        navbarMenu.classList.toggle('active');
    });
});
///linkowe
document.addEventListener("DOMContentLoaded", () => {
    const mainDiv = document.getElementById('main');
    const speciesLink = document.getElementById('vid_main');
    const seeSpeciesBtn = document.getElementById('mqsto_main');
    const speciesLinkMain = document.getElementById('vidove_main_sp');  
    const loadContent = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.text();
            mainDiv.innerHTML = data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            mainDiv.innerHTML = '<p>Error loading content.</p>';
        }
    };

    speciesLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('vidove_main.html');
    });
    speciesLinkMain.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('vidove_main.html');
    });
   
    seeSpeciesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('regioni+main.html');
    });
});

//home link
document.addEventListener("DOMContentLoaded", () => {
    const mainDiv = document.getElementById('main');
    const homeLink = document.getElementById('home');
    const initialContent = mainDiv.innerHTML; // Запазваме първоначалното съдържание на main

    const loadContent = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.text();
            mainDiv.innerHTML = data; // Зареждаме новото съдържание в main
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            mainDiv.innerHTML = '<p>Error loading content.</p>'; // В случай на грешка, показваме съобщение за грешка
        }
    };

    homeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвратяваме стандартното поведение на линка
        mainDiv.innerHTML = initialContent; // Зареждаме първоначалното съдържание на main
    });
});