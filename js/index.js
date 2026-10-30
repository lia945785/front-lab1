const news = document.getElementById("news");
const text = "Святкові канікули з 24 грудня по 2 січня";
news.style.fontWeight = getComputedStyle(document.querySelector("h1")).fontWeight * 1.5;
let i = 0;
const timer = setInterval(() => {
    news.textContent += text[i];
    i++;
    if (i === text.length) {
        clearInterval(timer);
    }
}, 100);
const hour = new Date().getHours();
if (hour >= 21 || hour < 6) {
    for (const element of document.querySelectorAll("*")) {
        const color = getComputedStyle(element).backgroundColor.match(/[\d.]+/g);
        if (color[3] !== "0") {
            element.style.backgroundColor = `rgb(${color[0] * 0.6}, ${color[1] * 0.6}, ${color[2] * 0.6})`;
        }
    }
}
