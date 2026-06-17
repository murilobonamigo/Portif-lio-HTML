document.addEventListener("DOMContentLoaded", () => {


    // =====================================================================
    //  ROLAGEM SUAVE DA NAVBAR
    //    MOLDE: Nada para alterar aqui — funciona automaticamente com os
    //    href="#ancora" definidos no index.html.
    // =====================================================================
    var menuLinks = document.querySelectorAll(".nav-links a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            var targetId = link.getAttribute("href");
            if (targetId.indexOf("#") == 0) {
                e.preventDefault();
                var targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });



});