document.querySelectorAll(".mobile-dropdown > span").forEach(span => {
    span.addEventListener("click", () => {
        span.parentElement.classList.toggle("open");
    });
});

function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle("open");
}
