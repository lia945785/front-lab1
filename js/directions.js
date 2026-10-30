const modal = document.getElementById("modal");
const agree = document.getElementById("agree");
document.getElementById("dcai").addEventListener("mouseenter", () => {
    if (!agree.checked) {
        modal.classList.add("show");
    }
});
agree.addEventListener("change", () => {
    modal.classList.remove("show");
});
for (const card of document.querySelectorAll(".card")) {
    card.addEventListener("mouseenter", () => card.classList.add("flipped"));
    card.addEventListener("mouseleave", () => card.classList.remove("flipped"));
}
