const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });


    
            function toggleAccordion(element) {
                const accordion = element.parentElement;
                accordion.classList.toggle("open");
            }
        