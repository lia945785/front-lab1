const details = document.getElementById("details");
const tooltip = document.createElement("span");
tooltip.className = "tooltip";
tooltip.textContent = "Дякуючи Вам, ми стаємо кращі! Конкретизуйте мету звернення, будь ласка";
details.after(tooltip);
details.addEventListener("mouseenter", () => {
    details.classList.add("active");
    tooltip.style.display = "inline-block";
});
details.addEventListener("mouseleave", () => {
    details.classList.remove("active");
    tooltip.style.display = "none";
});
