document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.getElementById('main');
    const mobileMenu = document.getElementById('mobile_menu');
    const navbarMenu = document.querySelector('.navbar_menu');
    const initialContent = mainDiv.innerHTML; // Запазваме първоначалното съдържание на main

    // Превключване на мобилното меню
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is_active');
            navbarMenu.classList.toggle('active');
        });
    }

    const loadContent = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.text();

            // Извличане на съдържанието в main елемента
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const newContent = doc.querySelector('.main').innerHTML;
            const styles = doc.querySelectorAll('link[rel="stylesheet"], style');

            // Премахване на старите стилове
            document.querySelectorAll('link.dynamic-style, style.dynamic-style').forEach(style => style.remove());

            // Добавяне на новите стилове
            styles.forEach(style => {
                style.classList.add('dynamic-style');
                document.head.appendChild(style.cloneNode(true));
            });

            mainDiv.innerHTML = newContent;
            attachEventListeners(); // Привързване на събитията отново след зареждането на новото съдържание
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            mainDiv.innerHTML = '<p>Error loading content.</p>';
        }
    };

    const attachEventListeners = () => {
        document.querySelectorAll('.navbar_link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const url = link.getAttribute('href');
                loadContent(url);
            });
        });

        document.querySelectorAll('.main_btn.species_link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent(link.getAttribute('href'));
            });
        });

        // Линкове за съдържание
        const speciesLink = document.getElementById('vid_main');
        const speciesLinkMain = document.getElementById('vidove_main_sp');
        const seeSpeciesBtn = document.getElementById('mqsto_main');
        const whiteLink = document.getElementById('ws');
        const tigerLink = document.getElementById('ts');
        const whaleLink = document.getElementById('whs');
        const reagen1Link = document.getElementById('r1');
        const reagen2Link = document.getElementById('r2');
        const reagen3Link = document.getElementById('r3');

        if (speciesLink) {
            speciesLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('vidove_main.html');
            });
        }

        if (speciesLinkMain) {
            speciesLinkMain.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('vidove_main.html');
            });
        }

        if (seeSpeciesBtn) {
            seeSpeciesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('regioni_main.html');
            });
        }

        if (whiteLink) {
            whiteLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('ws.html');
            });
        }

        if (tigerLink) {
            tigerLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('ts.html');
            });
        }

        if (whaleLink) {
            whaleLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('whs.html');
            });
        }

        if (reagen1Link) {
            reagen1Link.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('r1.html');
            });
        }

        if (reagen2Link) {
            reagen2Link.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('r2.html');
            });
        }

        if (reagen3Link) {
            reagen3Link.addEventListener('click', (e) => {
                e.preventDefault();
                loadContent('r3.html');
            });
        }

        // Home link
        const homeLink = document.getElementById('home');
        if (homeLink) {
            homeLink.addEventListener('click', (e) => {
                e.preventDefault(); // Предотвратяваме стандартното поведение на линка
                mainDiv.innerHTML = initialContent; // Зареждаме първоначалното съдържание на main
                attachEventListeners(); // Привързване на събитията отново след зареждането на новото съдържание
            });
        }
    };

    // Първоначално привързване на събитията при зареждане на страницата
    attachEventListeners();
});