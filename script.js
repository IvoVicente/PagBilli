const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("open");
}



window.onload = function () {
    const slider = document.getElementById("slider-consumo");
    const valorConsumo = document.getElementById("valor-consumo");
    const economiaEstimada = document.getElementById("economia-estimada");

    function atualizarEconomia(valor) {
        valorConsumo.textContent = `R$ ${Number(valor).toLocaleString('pt-BR')},00`;
        const economia = valor * 0.10;
        economiaEstimada.textContent = `R$ ${economia.toFixed(2).replace('.', ',')}/mês`;
    }

    slider.addEventListener("input", () => {
        atualizarEconomia(slider.value);
    });

    atualizarEconomia(slider.value);
};



