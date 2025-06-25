
document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.mobile-dropdown');

    toggles.forEach(drop => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('open');
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});

// Abrir e fechar os dropdowns no mobile
document.querySelectorAll(".mobile-dropdown > span").forEach(span => {
    span.addEventListener("click", () => {
        span.parentElement.classList.toggle("open");
    });
});


function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("open");
}



const slider = document.getElementById("slider-consumo");
const valorConsumo = document.getElementById("valor-consumo");
const economiaEstimada = document.getElementById("economia-estimada");

function atualizarEconomia(valor) {
    valorConsumo.textContent = `R$ ${Number(valor).toLocaleString('pt-BR')},00`;
    const economia = valor * 0.10;
    economiaEstimada.textContent = `R$ ${economia.toFixed(2).replace('.', ',')}/mês`;
}

function atualizarCorDoSlider(slider) {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    const porcentagem = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #000 ${porcentagem}%, #fff ${porcentagem}%)`;
}

slider.addEventListener("input", () => {
    atualizarEconomia(slider.value);
    atualizarCorDoSlider(slider);
});

// Inicializa
atualizarEconomia(slider.value);
atualizarCorDoSlider(slider);


