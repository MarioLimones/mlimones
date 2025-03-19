document.addEventListener("DOMContentLoaded", function () {
    // Menú responsive
    const menuToggle = document.querySelector(".hamburg");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const contactButton = document.querySelector(".btn[href='#contact']");
    const cvButton = document.querySelector(".btn[href='#']");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Navegación suave a secciones
    navLinks.forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Botón "Contáctame" lleva al apartado de contacto
    if (contactButton) {
        contactButton.addEventListener("click", function (event) {
            event.preventDefault();
            const contactSection = document.getElementById("contact");
            
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    }

    // Botón "Descargar Curriculum"
    if (cvButton) {
        cvButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "cv.pdf"; // Asegúrate de que el archivo esté en la misma carpeta
        });
    }

    // Cambiar clase activa en el header al desplazarse
    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});
